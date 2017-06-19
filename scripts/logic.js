function ClickNav() {

    var text = $(window.event.target)[0].innerHTML;
    var content = $("#content");
    switch (text) {
        case "Описание":
            content.load("content/about.html");
            break;
        case "Главная":
            content.load("content/main.html");
            break;
        case "Оборудование":
            content.load("content/equipment.html");
            break;
        case "Статьи":
            content.load("content/state.html");
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
    $("#content").load("content/main.html");
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
        $(".anchorImg").css("display",'flex');
    }
    if (scrolled <= 100) {
        $(".RootMenu").css("top", 58 + '%');
        $(".anchorImg").css("display",'none');

    }
};
