$('document').ready(function () {

    $('.history').on('click', function (e) {
        e.preventDefault();
        var href = $(this).attr('href');

        /*Function getContent*/
        getContent(href, true);
        $('.history').removeClass('active');
        $(this).addClass('active');
    });

    var hr = getUrl(location.href);
    getContent(hr, true, true);

});

window.addEventListener("popState", function (e) {
    getContent(location.pathname, false);
});


function getContent(url, addEntry, reload) {
    var content = $("#content");

    $.get(url).done(function (data) {

        if (url != undefined) {
            content.load("content/" + url.substring(1));
        }
        if (addEntry == true) {
            history.pushState(null, null, url);
        }
        setContent(reload, url);

    });

}

function setContent(reload, url) {
    if (reload == true) {
        $("#content").load("content/" + url);
    }
}




function getUrl(url) {
    var tmp = '';
    for (i = 0; i < url.length; i++) {
        if (url.substring(i, i + 1) == '#') {
            tmp = url.substring(i + 1);
            break;
        }
    }
    return tmp;
}