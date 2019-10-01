let changeHeight = (function () {
    let $iframeBox = $('.bigBox1'),
    timer = null;
    changetime = 1000;

    function change() {
        let boxHeight = document.getElementById("iframe").contentWindow.document.body.scrollHeight;
        $iframeBox.css('height', boxHeight + 10);
    }
    window.onload = function () {
        change();
    };
    timer =setInterval(()=>{
        change();
    })
})()