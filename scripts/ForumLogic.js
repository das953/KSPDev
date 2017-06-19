/**
 * Created by NewBalanse on 14.06.2017.
 */
$("document").ready(function () {
    $(".Forum-Tems").html(getForumContent());
});

function getForumContent() {
    var temp = "Тема : ";
    var html =
        "<div onclick='getQuestForum()' class='Text_item_forum'>" +
        temp +
        "<a href='#'>Возможно ли какать золотом?</a>" +
        " </div> ";
    return html;
}
function getQuestForum() {
    var arrQuest = ["Как то", "Как се", "Как тут", "Как там", "Как здесь"];
    var temp = "Вопрос : ";
    var html = "";
    for (var i = 0; i < arrQuest.length; i++) {
        html +=
            "<li onclick='Questions("+i+")' class='quest_Text_ul'>"  +
            "<a href='#'>" + temp + arrQuest[i] + "</a>" +
            "</li>" +
            "<ul class='Message'"+" id='"+i+"'></ul> "
    }
    $(".Forum-quest").html(html);
}
function Questions(id) {
    var html =
        "<input type='text' value='Name' class='Quest_name'>" +
        "<input type='text' value='Text' class='Quest_text'>" +
        "<input type='button' value='send' onclick='sendMessange("+id+")'>";
    $(".Forum_ans").html(html);
}
function sendMessange(id) {
    var name = document.getElementsByClassName(".Quest_name").value;
    var Text = $(".Quest_text").value;

    $("#"+id).html("<li>" +
     "<div class='quest_Text_ul'>" +
     "Name " + name +
     Text +
     "</div>" +
     "</li>");
}
