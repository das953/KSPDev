function ClickNav() {

    var text = $(window.event.target)[0].innerHTML;
    var content = $("#content");
    switch (text) {
        case "Описание":
            content.load("content/about.php");
            break;
        case "Главная":
            content.load("content/main.html");
            break;
        case "Оборудование":
            content.load("content/equipment.php");
            break;
        case "Статьи":
            content.load("content/articles.php");
            break;
        case "Форум":
            document.location = "content/forum.html";
            break;
        case "Партнеры":
            content.load("content/partners.html");
            break;
        default:
            break;
    }
}


$(document).ready(function () {
    $("#content").load("content/news.php");
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
