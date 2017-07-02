var EngleshBtn = 0;//0 - RU 1 - UA

function ClickNav() {

    var text = $(window.event.target)[0].innerHTML;
    var content = $("#content");
    if (EngleshBtn == 0) {
        switch (text) {
            case "Описание":
                content.load("RU/content/about.html");
                break;
            case "Главная":
                content.load("RU/content/main.html");
                break;
            case "Оборудование":
                content.load("RU/content/equipment.html");
                break;
            case "Статьи":
                content.load("RU/content/state.html");
                break;
            case "Форум":
                document.location = "content/forum.html";
                break;
            case "Партнеры":
                content.load("RU/content/partners.html");
                break;
            default:
                break;
        }
    }
    else if (EngleshBtn == 1) {
        switch (text) {
            case "Описание":
                content.load("UA/content/about.html");
                break;
            case "Главная":
                content.load("UA/content/main.html");
                break;
            case "Оборудование":
                content.load("UA/content/equipment.html");
                break;
            case "Статьи":
                content.load("UA/content/state.html");
                break;
            case "Форум":
                document.location = "content/forum.html";
                break;
            case "Партнеры":
                content.load("UA/content/partners.html");
                break;
            default:
                break;
        }
    }
}

$(document).ready(function () {
    $("#content").load("RU/content/main.html");
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

function LanguageOn() {
    if (EngleshBtn == 0)
        EngleshBtn = 1;
    else
        EngleshBtn = 0;
}

function OnClickMenu() {
    var content = $("#content");
    content.load("UA/content/comand.html");
}
