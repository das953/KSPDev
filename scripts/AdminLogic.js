/**
 * Created by NewBalanse on 11.06.2017.
 */
document.write(
    /*"<input type='button' value='B' onclick='setBold()'/>" +
     "<input type='button' value='I' onclick='setItal()'/>" +
     "<input type='button' value='U' onclick='setUnderline()'/>" +
     "<input type='button' value='Size' onclick='setSize()'/>" +
     "<input type='button' value='http://' onclick='setLink()'>" +
     */
    "<div class='flexInput'>" +
    "<textarea id='frameId' name='frameId' placeholder='В этом поле необходимо ввести заголовок вашей статьи' wrap='soft | hard'></textarea>" +
    "<label class='AdminText' for='frameId'> Заглавие </label>" +
    "</div>" +
    "<div class='flexInput'>" +
    "<textarea id='frameContent' name='frameContent' placeholder='В этом поле необходимо ввести основной контент вашей статьи' wrap='soft | hard'></textarea>" +
    "<label class='AdminText' for='frameContent'>Полный текст</label>" +
    "</div>" +
    "<div class='flexInput'>" +
    "<textarea id='framePreview' name='framePreview' placeholder='В этом поле необходимо ввести краткое описание вашей статьи' wrap='soft | hard'></textarea>" +
    "<label class='AdminText' for='framePreview'>Краткое описание</label>" +
    "</div>"
);

var isGecko = navigator.userAgent.toLocaleLowerCase().indexOf("gecko") != -1;

var iframe = (isGecko) ? document.getElementById("frameId") : frames["frameId"];

var frameContent = (isGecko) ? document.getElementById("frameContent") : frames["frameContent"];

var framePreview = (isGecko) ? document.getElementById("framePreview") : frames["framePreview"];

var CodeHTML = '';//здесь полное описание плюс заглавие
var CodePreview = '';//Здесь краткое описание плюс заглавие чтобы смотрелось на траничке красиво

function setImage() {
    iWinContent.focus();
    var _HttpImg = prompt("This Link image:", "link IMG");
    iWinContent.document.execCommand("InsertImage", true, _HttpImg);
}
/*function setUnderline() {
 iWin.focus();
 iWin.document.execCommand("Underline", null, "");
 }
 function setBold() {
 iWin.focus();
 iWin.document.execCommand("bold", null, "");
 }
 function setItal() {
 iWin.focus();
 iWin.document.execCommand("italic", null, "");
 }
 function setLink() {

 iWin.focus();
 var _Url = prompt("Enter link:", "http://");
 iWin.document.execCommand("CreateLink", true, _Url);
 }
 function setSize() {
 iWin.focus();
 var _Size = prompt("Size:", "");
 iWin.document.execCommand("FontSize", false, _Size);
 }*/
function save() {
    /*var HtmlContent = "<div style='background: green;' class='ThisIsContent'></div>";
     document.getElementById("content").value = iDoc.body.innerHTML;*/

    ReturnHTMLCode(iframe.value, 0);
    ReturnHTMLCode(frameContent.value, 2);
    ReturnHTMLCode(framePreview.value, 1);

    alert(CodeHTML);
    document.body.innerHTML = CodeHTML;

}
function ReturnHTMLCode(code, ContentOrNO) {
    var htmlcode = code;
    if (htmlcode == " ")
        alert("This Code is null");

    if (ContentOrNO == 0)
        CodeHTML = CreateZ(htmlcode, true);
    else if (ContentOrNO == 1)
        CodeHTML += CreateContent(htmlcode, true);
    else {
        CodePreview += CreateContent(htmlcode, false);
    }

    /*Здесь возврашаеться по идеи полность стилизированый код как в оборудовании*/
}
function CreateZ(htmlcode) {
    var BigText = "<div class='themeLine flex-content'>" +
        "<div class='flex-item'>" +
        htmlcode +
        "</div>" +
        "</div>";

    return BigText;
}
function CreateContent(htmlcode) {
    var CodeContent = "<div>" +
        "<pre style='font-size: 20px; font-weight: 400; white-space: pre-line; text-align: left;'><span>";
    CodeContent += htmlcode + "</span>" + "</pre></div>";

    return CodeContent;
}