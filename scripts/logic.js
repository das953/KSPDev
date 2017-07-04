$(document).ready(function () {
    $("#content").load("content/news.php?lang=UA&type=News");
   // history.pushState(null, null, "news.php?lang=UA&type=News");
    window.location = '#' + "news.php?lang=UA&type=News";
});

function SkrollAnchor() {
    $("body,html").animate({scrollTop: 0}, 400);
}
window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var sc = scrolled + 'px';
    /*$(".RootMenu").css("margin-top",topcount + '%');*/
    if (scrolled >= 587) {
        $(".RootMenu").css("top", 53 + '%');
        $(".anchorImg").css("display", 'flex');
    }
    if (scrolled <= 100) {
        $(".RootMenu").css("top", 58 + '%');
        $(".anchorImg").css("display", 'none');

    }
};


function OnClickMenu() {
    var content = $("#content");
    content.load("content/aboutUs.html");
}
