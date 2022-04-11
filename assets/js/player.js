/* VIDEOJS */
function videojs(vidURL) {
    var playerVid = document.getElementsByTagName('video')[0];
    playerVid.src = vidURL;
    playerVid.load();
    playerVid.play();
}


/* ################################### */
$(document).ready(function() {
    getPlaylists("https://gopal15.insomnia247.nl/project/admin/assets/gftv/playlist.m3u8");
    $('#m3uForm').on('submit', function(e) {
        e.preventDefault();
        var playlists = $('#playlists').val();
        getPlaylists(playlists);
    });
});

function getPlaylists(playlists) {
    $('#result').html('');
    $.ajax({
        url: 'https://gopal15.insomnia247.nl/project/admin/assets/gftv/json.php',
        method: 'GET',
        dataType: 'jsonP',
        data: {
            url: playlists,
        }
    }).done(function(data) {
        $('#totalS').text('Total: ' + data.length + ' Films');
        $.each(data, function(i, item) {
            var tvglogo = '';
            if (typeof item.tvlogo != 'undefined')
            tvglogo = '<img src="' + item.tvlogo + '" alt="' + item.tvtitle + '"/>';
            $('#result').append('<li><a href="javascript:void(0);" onClick="closeNav();javascript:videojs(\'' + item.tvmedia + '\'); return false;">' + tvglogo  + item.tvtitle + '</a>' + '</li>');
        });
    });
}



// application/x-mpegURL
// <li><a onclick="closeNav();playVid('https://bin.jvnv.net/file/x8EDE/My%20Video.mp4', 'video/mp4');" />Beritasatu</a></li>