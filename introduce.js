let menu = document.querySelectorAll("header a");
for(var i = 0; i < aTags.length; i ++) {
    menu[i].onclick = function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute("href"));

        window.scrollTo({
            'behavior': 'smooth',
            'top': target.offsetTop
        })
    }
}