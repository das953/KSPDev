/**
 * Created by Das953 on 08.07.2017.
 */
document.getElementById('shareBtn').onclick = function() {
    FB.ui({
        method: 'feed',
        display: 'popup',
        link: 'http://vmsystem.com.ua'
    }, function(response){});
}