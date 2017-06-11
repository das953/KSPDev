function ClickNav() {

var text = $(window.event.target)[0].innerHTML;
var content = $("#content");
switch (text){
    case "Описание": content.load("content/about.html");
    break;
    case "Главная": content.load("content/main.html");
    break;

    default:
        break;
}
}



$(document).ready(function () {
    $("#content").load("content/main.html");
});

