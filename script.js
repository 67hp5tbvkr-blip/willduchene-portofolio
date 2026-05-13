const videos = [
  "FT0frI2LMtY",
  "fLNfS5OR8t4",
  "3m3XVDgL7ww",
  "nfFwveM2eLA"
];

const containers = {
  showreels: document.getElementById("showreels"),
  captures: document.getElementById("captures"),
  clips: document.getElementById("clips"),
  interviews: document.getElementById("interviews"),
  trailers: document.getElementById("trailers")
};

function createCard(id){
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg">
  `;

  div.onclick = () => openVideo(id);
  return div;
}

function openVideo(id){
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("player").src =
    player.src = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=1`;;
}

document.getElementById("close").onclick = () => {
  document.getElementById("lightbox").style.display = "none";
  document.getElementById("player").src = "";
};

/* SIMPLE FILL (STABLE) */
videos.forEach(id => {
  Object.values(containers).forEach(c => {
    if(c) c.appendChild(createCard(id));
  });
});};

/* SIMPLE FILL (STABLE) */
videos.forEach(id => {
  Object.values(containers).forEach(c => {
    if(c) c.appendChild(createCard(id));
  });
});
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
