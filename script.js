const API_KEY = "MET_TA_CLE_API_ICI";

const PLAYLIST = "PLJpwSH_unsgIN3bCbNm-7RSkpsem3VbFM";

const grid = document.getElementById("grid");

async function load(){
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${PLAYLIST}&key=${API_KEY}`
  );

  const data = await res.json();

  data.items.forEach(v => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${v.snippet.thumbnails.medium.url}">
      <p>${v.snippet.title}</p>
    `;

    div.onclick = () => openVideo(v.snippet.resourceId.videoId);

    grid.appendChild(div);
  });
}

function openVideo(id){
  document.getElementById("lightbox").style.display="block";
  document.getElementById("player").src=`https://www.youtube.com/embed/${id}`;
}

function closeVideo(){
  document.getElementById("lightbox").style.display="none";
  document.getElementById("player").src="";
}

load();
