/*global module:true, require:true */
module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        jshint: {
            all: "*.js",
            options: {
                bitwise: true,
                browser: true,
                camelcase: true,
                curly: true,
                devel: true,
                eqeqeq: true,
                es3: true,
                forin: true,
                globals: {
                    "define": false,
                    "describe": false,
                    "xdescribe": false,
                    "it": false,
                    "xit": false,
                    "beforeEach": false,
                    "afterEach": false,
                    "jasmine": false,
                    "spyOn": false,
                    "expect": false,
                    "waitsFor": false
                },
                immed: true,
                indent: 4,
                latedef: true,
                maxdepth: 2,
                maxlen: 120,
                newcap: true,
                noarg: true,
                noempty: true,
                onevar: true,
                plusplus: true,
                quotmark: "double",
                strict: true,
                trailing: true,
                undef: true
            }
        },

        clean: {
            options: {
                force: true
            },
            reports: {
                src: ["reports", "docs"]
            }
        },

        watch: {
            files: ["*.js"],
            tasks: ["default"]
        },

        jasmine: {
            coverage: {
                src: "dates.js",
                options: {
                    specs: "dates-spec.js",
                    vendor: "libs/jquery2.min.js",
                    template: require("grunt-template-jasmine-istanbul"),
                    templateOptions: {
                        coverage: "reports/lcov/coverage.json",
                        report: {
                            type: "lcov",
                            options: {
                                dir: "reports/lcov"
                            }
                        },
                        thresholds: {
                            lines: 0,
                            statements: 0,
                            branches: 0,
                            functions: 0
                        }
                    }
                }
            }
        },

        complexity: {
            generic: {
                src: ["dates.js"],
                options: {
                    checkstyleXML: "reports/complexity-checkstyle.xml",
                    errorsOnly: false,
                    cyclomatic: 3
                }
            }
        },

        yuidoc: {
            compile: {
                name: "<%= pkg.name %>",
                version: "<%= pkg.version %>",
                options: {
                    paths: ".",
                    outdir: "docs"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-jasmine");
    grunt.loadNpmTasks("grunt-complexity");
    grunt.loadNpmTasks("grunt-contrib-yuidoc");

    grunt.registerTask("default", ["jshint", "clean:reports", "jasmine:coverage",
        "complexity:generic", "yuidoc:compile"]);
};
