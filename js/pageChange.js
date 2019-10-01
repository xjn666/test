let pageChange = (function () {
    let $articleList = $('.articleList'),
        $ulList = $articleList.children('ul'),
        $pageChange = $('.pageChange'),
        $liList = $pageChange.children('li'),
        $previous = $('.previous'),
        $next = $('.next'),
        pageNum = 0;

    function autoFocus() {
        $liList.eq(pageNum).addClass('active');
        $liList.eq(pageNum).siblings().removeClass('active');
        $ulList.eq(pageNum).addClass('active');
        $ulList.eq(pageNum).siblings().removeClass('active');
        parent.window.scrollTo(0, 460);
    }

    function changeNum() {
        $next.click(() => {
            pageNum < $liList.length ? pageNum++ : null;
            autoFocus();
        })
        $previous.click(() => {
            pageNum > 0 ? pageNum-- : null;
            autoFocus();
        })
    }

    function clickMove() {
        $liList.each((index, item) => {
            $(item).click(() => {
                pageNum = index;
                autoFocus();
            })
        })
    }


    return {
        init() {
            changeNum();
            clickMove();
        }
    }
})()
pageChange.init();