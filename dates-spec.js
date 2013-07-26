/*global Dates:true */
describe("Dates module - isMonday method", function() {
    "use strict";

    it("Recognises 22 July 2013 as a Monday", function() {
        var isMonday = Dates.isMonday(new Date("2013-07-22"));
        expect(isMonday).toBe(true);
    });

    it("Knows 25 July 2013 is not a Monday", function() {
        var isMonday = Dates.isMonday(new Date("2013-07-25"));
        expect(isMonday).toBe(false);
    });

});