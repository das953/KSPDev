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

    var size = window.innerHeight;
    console.log(size);

    if (scrolled >= 350 ) {
        $(".RootMenu").css("top", 48 + '%');
        $(".anchorImg").css("display", 'flex');
    }
    if (scrolled <= 300) {
        $(".RootMenu").css("top", 58 + '%');
        $(".anchorImg").css("display", 'none');

    }
};


function OnClickMenu() {
    var content = $("#content");
    content.load("content/aboutUs.html");
}
