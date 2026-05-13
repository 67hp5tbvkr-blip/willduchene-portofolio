const API_KEY = "AIzaSyAWnHVIODi6O7PQpNAxSIBlM2LNNynY8H0";

/* PLAYLISTS */
const PLAYLISTS = {
  showreel: "PLJpwSH_unsgIN3bCbNm-7RSkpsem3VbFM",
  capture: "PLJpwSH_unsgJVCaxQdOiQ7UIJvl2SxKCV",
  clip: "PLJpwSH_unsgJBZNUqjH7zSsms_QcwmWNc",
  interview: "PLJpwSH_unsgIyofHxEz-kRSEgMPZia5DH",
  trailer: "PLJpwSH_unsgI39IXHReNTR9w0hScxuLki"
};

/* LIGHTBOX */
const lightbox = document.getElementById("lightbox");
const player = document.getElementById("player");

function openVideo(id){
  player.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
  lightbox.style.display = "flex";
}

document.getElementById("close").onclick = () => {
  lightbox.style.display = "none";
  player.src = "";
};

/* LOAD PLAYLIST */
async function loadPlaylist(id, container){
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${id}&key=${API_KEY}`
  );

  const data = await res.json();

  data.items.forEach(v => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${v.snippet.thumbnails.medium.url}">
    `;

    div.onclick = () => openVideo(v.snippet.resourceId.videoId);

    document.getElementById(container).appendChild(div);
  });
}

/* INIT */
loadPlaylist(PLAYLISTS.showreel, "showreels");
loadPlaylist(PLAYLISTS.capture, "captures");
loadPlaylist(PLAYLISTS.clip, "clips");
loadPlaylist(PLAYLISTS.interview, "interviews");
loadPlaylist(PLAYLISTS.trailer, "trailers");}

.section {
padding:120px 10%;
}

.dark {
background:#0b0b0b;
}

h2 {
font-size:30px;
margin-bottom:30px;
}

.category {
margin-top:40px;
margin-bottom:10px;
opacity:0.7;
text-transform:uppercase;
font-size:12px;
letter-spacing:2px;
}

.row {
display:flex;
gap:15px;
overflow-x:auto;
}

.card {
min-width:280px;
cursor:pointer;
}

.card img {
width:100%;
border-radius:6px;
}

#lightbox {
display:none;
position:fixed;
inset:0;
background:black;
align-items:center;
justify-content:center;
}

#lightbox iframe {
width:85%;
height:80%;
}

#close {
position:absolute;
top:20px;
right:20px;
font-size:30px;
background:none;
border:none;
color:white;
}}

load();
