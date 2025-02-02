document.addEventListener("DOMContentLoaded", function () {
    window.onscroll = function () {
        stickyNav();
    };

    var navbar = document.getElementById("site-navigation");
    var sticky = navbar?.offsetTop || 0;

    function stickyNav() {
        if (window.scrollY >= sticky) {
            navbar?.classList.add("sticky");
        } else {
            navbar?.classList.remove("sticky");
        }
    }
});