/**
 * Created by NewBalanse on 11.06.2017.
 */
document.write(
    /*"<input type='button' value='B' onclick='setBold()'/>" +
     "<input type='button' value='I' onclick='setItal()'/>" +
     "<input type='button' value='U' onclick='setUnderline()'/>" +
     "<input type='button' value='Size' onclick='setSize()'/>" +
     "<input type='button' value='http://' onclick='setLink()'>" +
     */"<input type='button' value='IMG' onclick='setImage()'>" +
    "<br/>" + "Заглавие" + "<br>" +
    "<iframe scrolling='no' frameborder='no' src='#' id='frameId' name='frameId'>" +
    "</iframe>" +
    "<br>" + "Полный текст" + "<br>" +
    "<iframe scrolling='no' frameborder='no' src='#' id='frameContent' name='frameContent'></iframe>" +
    "<br>" + "Краткое описание" + "<br>" +
    "<iframe scrolling='no' frameborder='no' src='#' id='framePreview' name='framePreview'></iframe> "
);

var isGecko = navigator.userAgent.toLocaleLowerCase().indexOf("gecko") != -1;
var iframe = (isGecko) ? document.getElementById("frameId") : frames["frameId"];
var iWin = (isGecko) ? iframe.contentWindow : iframe.window;
var iDoc = (isGecko) ? iframe.contentDocument : iframe.document;

var frameContent = (isGecko) ? document.getElementById("frameContent") : frames["frameContent"];
var iWinContent = (isGecko) ? frameContent.contentWindow : frameContent.window;
var iDocContent = (isGecko) ? frameContent.contentDocument : frameContent.document;

var framePreview = (isGecko) ? document.getElementById("framePreview") : frames["framePreview"];
var iWinPreview = (isGecko) ? framePreview.contentWindow : framePreview.window;
var iDocPreview = (isGecko) ? framePreview.contentDocument : framePreview.document;


var iHTML = "<html><head></head><body style='border: 2px solid black'></body> </html>";
iDoc.open();
iDoc.write(iHTML);
iDoc.close();

iDocContent.open();
iDocContent.write(iHTML);
iDocContent.close();

iDocPreview.open();
iDocPreview.write(iHTML);
iDocPreview.close();


iDoc.designMode = 'on';
iDocContent.designMode = 'on';
iDocPreview.designMode = 'on';

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
    ReturnHTMLCode(iDoc.body.innerHTML, 0);
    ReturnHTMLCode(iDocPreview.body.innerHTML, 2);
    ReturnHTMLCode(iDocContent.body.innerHTML, 1);

}
var CodeHTML = '';//здесь полное описание плюс заглавие
var CodePreview = '';//Здесь краткое описание плюс заглавие чтобы смотрелось на траничке красиво

function ReturnHTMLCode(code, ContentOrNO) {
    var htmlcode = code;
    if (htmlcode == " ")
        alert("This Code is null");

    if (ContentOrNO == 0)
        CodeHTML = CreateZ(htmlcode, true);
    else if (ContentOrNO == 1)
        CodeHTML += CreateContent(htmlcode, true);
    else{
        CodePreview = CodeHTML;
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
function CreateContent(htmlcode, ComeON) {
    var CodeContent = "<div>" +
        "<pre style='font-size: 20px; font-weight: 400; white-space: pre-line; text-align: left;'>";

    var temp = "<span>";

    var count = 0;
    for (var i = 0; i < htmlcode.length; i++) {
        if (htmlcode.substring(i, i + 2) == "</") {
            i += 5;
            temp += "</span>";
        }
        else if (htmlcode.substring(i, i + 1) == '<') {
            i += 4;
            temp += "</span><span>";
        }
        else {
            count++;
            temp += htmlcode.substring(i, i + 1);
        }
    }
    CodeContent += temp + "</pre></div>";

    if (ComeON == true)
        return CodeContent;
    else{
        if(count > 300)
            alert("Нужно меньше чем 300 символов для краткого описания");
        else
            return CodeContent;
    }
}