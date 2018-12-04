/*
 * @Author: Administrator
 * @Date:   2018-02-06 20:42:40
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-02-06 20:47:40
 */
(function($) {
    $.fn.userInfo = function(options) { //定义插件方法名
        options = $.extend({
            //定义一个对象，设置默认值
            name: 'allysu', //名
            email: '123456789@126.com', //链接
            size: '14px', //文字大小
            align: 'center ' //文字位置，left || center || right
        }, options);

        var style = 'style="font-size:' + opt.size + ';text-align:' + opt.align + ';"'; //调用默认的样式
        var name = '<p' + ' ' + style + '>name:<a target="_blank" >' + opt.name + '</a></p>';
        var email = '<p' + ' ' + style + '>name:<a target="_blank">' + opt.email + '</a></p>';
        this.append(name);
        this.append(name);

        return this;
    }
})(window.jQuery);

//返回return this是可以链式反应
//说说$.extend(), 这个方法，他的作用就是扩展，以上这段代码就是将options拓展到dft,最后赋给opt.
//这样写为了可读性。

// 所以这段代码还可以这样

 // options = $.extend({//here is default values},options);
