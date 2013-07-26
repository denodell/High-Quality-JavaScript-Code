/*global jQuery:true */

/**
Utility methods for handling dates

@class Dates
@static
*/

var Dates = (function(window, document, $, undefined) {
    "use strict";

    /**
    Lets you know if a supplied date is a Monday

    @method isMonday
    @param {Date} dateObj date to test
    @return {Boolean} true if supplied date is a Monday
    */

    function isMonday(dateObj) {
        var inputDayOfTheWeek = dateObj.getDay(),
            mondayDayOfTheWeek = 1;
        return (inputDayOfTheWeek === mondayDayOfTheWeek);
    }

    return {
        isMonday: isMonday
    };
}(window, document, jQuery));