$(document).ready(function () {
    $("#content").load("content/news.php?lang=UA&type=News");

    history.pushState(null, null, "#news.php?lang=UA&type=News");
});

function SkrollAnchor() {
    $("body,html").animate({scrollTop: 0}, 400);
}
window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled >= 350 ) {
        $(".RootMenu").css("top", 48 + '%');
        $(".anchorImg").css("display", 'flex');
    }
    if (scrolled <= 300) {
        $(".RootMenu").css("top", 58 + '%');
        $(".anchorImg").css("display", 'none');

    }
};
