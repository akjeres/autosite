(function() {
    var counter = 0;
    function getScrollBarState() {
        var result = {vScrollbar: true, hScrollbar: true};
        try {
            var root = document.compatMode=='BackCompat'? document.body : document.documentElement;
            result.vScrollbar = root.scrollHeight > root.clientHeight;
            result.hScrollbar = root.scrollWidth > root.clientWidth;
        } catch(e) {}
        return(result);
    }

    document.querySelector('.burger').onclick = function() {
        counter++;
        if (counter%2) {
            document.querySelector('header').classList.add('active');
        } else {
            document.querySelector('header').classList.remove('active');
        }
    }
})();

/*if (getScrollBarState().vScrollbar) {
    document.querySelector('html').classList.add('scroll');
}*/
