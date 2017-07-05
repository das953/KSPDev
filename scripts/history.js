var leftPanelNames = ["AboutUs" , "Spectrum" , "Product" , "Contacts" ];
var regExp = new RegExp(/^.*type=(.*)$/);

$('document').ready(function () {

    $('.history').on('click', function (e) {
        e.preventDefault();
        var href = $(this).attr('href');

        /*Function getContent*/
        getContent(href, true);
        $('.history').removeClass('active');
        $(this).addClass('active');
    });

});

window.addEventListener("popState", function (e) {
    getContent(location.pathname, false);
});


function getContent(url, addEntry, reload) {
    var content = $("#content");
console.log("url is : "+url);
    $.get(url).done(function (data) {

        if (url !== undefined) {
            setContent(true, url.substring(1));
        }
        if (addEntry === true) {
            history.pushState(null, null, url);
        }
        setContent(reload, url);

    });

}

function setContent(reload, url) {
    if (reload === true) {
        var content = $("#content");


        leftPanelNames.indexOf(regExp.exec(url)[1]) === -1
            ?
            content.load("content/" + url)
            :
            content .load("leftPanel/" + url);
    }
}

