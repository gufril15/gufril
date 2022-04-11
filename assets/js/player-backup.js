/* VIDEOJS */
var vid = document.getElementById("vidplayers"); 

function playVid() {
  vid.load();
  vid.play(); 
}

/* <li><a onclick="closeNav();playVid('https://bin.jvnv.net/file/x8EDE/My%20Video.mp4', 'video/mp4');" />Beritasatu</a></li>
   <li><a onclick="closeNav();playVid('http://assets3.ign.com/videos/zencoder/2016/06/15/640/7080c56a76e2b74ec8ecfe4c224441d4-500000-1466028542-w.mp4','video/mp4');" />Jumanji</a></li>
   <li><a onclick="closeNav()" />Frozen 2 Go</a></li>
   <li><a onclick="closeNav()" />transtv</a></li> */

// playlist side menu  
var 
const lists = [
        '<a> Apple</a>',
        '<a> Mango</a>'
        ];

let playLen = lists.length;

let text = "<ul>";
for (let i = 0; i < playLen; i++) {
    text += "<li>" + lists[i] + "</li>";
}
text += "</ul>";

document.getElementById("playlistsmenu").innerHTML = text; 
