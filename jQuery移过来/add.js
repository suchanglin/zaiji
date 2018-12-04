(function($) {
    $.extend({
        "addNum": function(p1, p2) {
            //如果传入的数字不为空，使用传入的数字，否则为0
            p1 = (p1 == undefined) ? 0 : p1;
            p2 = (p2 == undefined) ? 0 : p2;
            var intResult = parseInt(p1) + parseInt(p2);
            return intResult;
        },
        "subNum": function(p1, p2) {
            //如果传入的数字不为空，使用传入的数字，否则为0
            var intResult = 0;
            p1 = (p1 == undefined) ? 0 : p1;
            p2 = (p2 == undefined) ? 0 : p2;
            if (p1 > p2) { //如果传入的参数前者大于后者
                intResult = parseInt(p1) - parseInt(p2);
            } else { intResult = -(parseInt(p2) - parseInt(p1)); }
            return intResult;
        }
    });
})(jQuery);
