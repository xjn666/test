let bannerModult = (function () {
    let $container = $('.container'),
        $wrapper = $container.children('.wrapper'),
        $pagenition = $('.pagenition'),
        $pagenitionList = $pagenition.find('li');
    let timer = null, //存储自动轮播的定时器
        step = 0, //当前展示的是索引为N的slider
        interval = 2000; //多少时间运行一次
    //自动轮播
    function autoMove() {
        step++;
        if (step >= 5) {
            //上一次显示的克隆的第一张，此时我们让其立即跳转到真实的第一张，让其运动到第二张即可
            $wrapper.css('transition', '');
            $wrapper.css('left', 0);
            $wrapper.outerHeight();
            step = 1;
        }
        $wrapper.css('transition', '0.5s linear');
        $wrapper.css('left', -step*700);
        //自动焦点对齐
        autoFocus()
    }
    //自动对焦
    function autoFocus() {
        let temp = step;
        temp === 4 ? temp = 0 : null;
        $pagenitionList.each((index, item) => {
            let $item = $(item);
            if (index == temp) {
                $item.addClass('active');
                return
            }
            $item.removeClass('active')
        })
    }
    //焦点对齐 点击哪个 跳转到哪个
    function handlerPagenition() {
        $pagenitionList.click(function () {
            let index = $(this).index();
            step = index;
            $wrapper.css('left', -step*700);
            autoFocus();
        })
    }

    return {
        init: function () {
            timer = setInterval(autoMove, interval);
            $container.on('mouseenter', () => clearInterval(timer)).on('mouseleave', () => timer = setInterval(autoMove, interval));
            handlerPagenition();
        }
    }
})();
bannerModult.init()