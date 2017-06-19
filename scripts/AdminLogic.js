/**
 * Created by NewBalanse on 11.06.2017.
 */
document.write("" +
    "<input type='button' value='B' onclick='setBold()'/>" +
    "<input type='button' value='I' onclick='setItal()'/>" +
    "<input type='button' value='U' onclick='setUnderline()'/>" +
    "<input type='button' value='Size' onclick='setSize()'/>" +
    "<input type='button' value='http://' onclick='setLink()'>" +
    "<input type='button' value='IMG' onclick='setImage()'>" +
    "<br/>" +
    "<iframe scrolling='no' frameborder='no' src='#' id='frameId' name='frameId'>" +
    "</iframe>"
);

var isGecko = navigator.userAgent.toLocaleLowerCase().indexOf("gecko") != -1;
var iframe = (isGecko) ? document.getElementById("frameId") : frames["frameId"];
var iWin = (isGecko) ? iframe.contentWindow : iframe.window;
var iDoc = (isGecko) ? iframe.contentDocument : iframe.document;

var iHTML = "<html><head></head><body style='border: 2px solid black'></body> </html>";
iDoc.open();
iDoc.write(iHTML);
iDoc.close();
iDoc.designMode = 'on';

function setImage() {
    iWin.focus();
    var _HttpImg = prompt("This Link image:", "link IMG");
    iWin.document.execCommand("InsertImage", true, _HttpImg);
}
function setUnderline() {
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
}
function save() {
    /*var HtmlContent = "<div style='background: green;' class='ThisIsContent'></div>";
    document.getElementById("content").value = iDoc.body.innerHTML;*/
    ReturnHTMLCode(iDoc.body.innerHTML);
}

function ReturnHTMLCode(code) {
    var htmlcode = code;
    if (htmlcode == " ")
        alert("This Code is null");
    else
        alert(htmlcode);
}

function CreateHtmlFile() {
    var object = new ActiveXObject("Scripting.FileSystemObject");
    var _File = object.create("/NewFile.txt", true);
}