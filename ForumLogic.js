/**
 * Created by NewBalanse on 14.06.2017.
 */
$("document").ready(function () {
    $(".Forum-Tems").html(getForumContent());
});

function getForumContent() {
    var html =
        "<div onclick='getQuestForum()'>" +
        "<a href='#'>Возможно ли какать золотом?</a>" +
        "<ul class='Forum-quest'></ul>" +
        " </div>";
    return html;
}
function getQuestForum() {
    var arrQuest = ["Как то", "Как се", "Как тут", "Как там", "Как здесь"];
    var html = "";
    for (var i = 0; i < arrQuest.length; i++) {
        html +=
            "<li onclick='Questions()'>" +
            "<a href='#'>"+arrQuest[i]+"</a>" +
            "<ul class='Message'></ul> " +
            "</li>"
    }
    $(".Forum-quest").html(html);
}

function Questions() {
    var html =
        "<input type='text' value='Name' class='Quest_name'>" +
        "<input type='text' value='Text' class='Quest_text'>" +
        "<input type='button' value='send' onclick='sendMessange()'>";
    $(".Forum_ans").html(html);
}
function sendMessange() {
    var name = $(".Quest_name").value;
    var Text = $(".Quest_text").value;

    $(".Message").html("<li>" +
        "<div>" +
        "Name" +name+
        Text +
        "</div>" +
        "</li>");
}
