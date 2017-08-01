/**
 * Created by NewBalanse on 14.06.2017.
 */
$("document").ready(function () {
    $(".Forum-Tems").html(getForumContent());
});
//По идее здесь мы генерим темы
function getForumContent() {
    var temp = "Тема : ";
    var html =
        "<div onclick='getQuestForum()' class='Text_item_forum'>" +
        temp +
        "<a href='#'>Test forum</a>" +
        " </div> ";
    return html;
}

//Генерим вопросы ибо я супер задрот и хочу их генерить именно так
function getQuestForum() {
    var arrQuest = ["Как то", "Как се", "Как тут", "Как там", "Как здесь"];//масив вопросов для теста идбо я тупой и незнаю как оно будет с базой работать
    var temp = "Вопрос : ";
    var html = "";
    for (var i = 0; i < arrQuest.length; i++) {
        var ID = i + 999;
        html +=
            "<li onclick='Questions(" + i + "," + ID + ")' id='" + ID + "' class='quest_Text_ul'>" +
            "<a href='#'>" + temp + arrQuest[i] + "</a>" +
            "</li>" +
            "<ul class='Message'" + " id='" + i + "'></ul> "
    }
    $(".Forum-quest").html(html);
}

var tempForQuestions = true;
var ofOn;
function Questions(idQuest, id) {

//Можно и поправить но немного потом я щас очень уставшый и нужно подумать
    $("#" + ofOn).css("background", "cornflowerblue");
    ofOn = id;
    $("#" + id).css("background", "orange");
    tempForQuestions = false;

    var html = "<form>" +
        "<textarea id='NameInput' class='Quest_name' placeholder='Здесь имя' wrap='soft | hard'></textarea><br>" +
        "<textarea id='TextInput' class='Quest_text' placeholder='Здесь ваш вопрос' wrap='soft | hard'></textarea><br>" +
        "<input class='Quest_btn' type='button' value='send' onclick='sendMessage(" + idQuest + ")'>" +
        "</form>";

    $(".Forum_ans").html(html);
}
//отправка сообщения срабатывает тогда когда нажали на определеный вопрос
function sendMessage(id) {
    var Name = document.getElementById("NameInput").value;
    var Text = document.getElementById("TextInput").value;
//Типа отправляет сообщение по нажатому елементу идентифицырует по ид
    $("#" + id).html("<li>" +
        "<div class='quest_Text_ul'>" +
        "Name: " + Name + '<br>'+
        Text +
        "</div>" +
        "</li>");
}
