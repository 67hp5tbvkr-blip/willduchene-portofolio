const videos = [
  "G3zP-RhcgAE",
  "FT0frI2LMtY",
  "fLNfS5OR8t4",
  "3m3XVDgL7ww",
  "nfFwveM2eLA"
];

const grid = document.getElementById("grid");
const lightbox = document.getElementById("lightbox");
const player = document.getElementById("player");

function openVideo(id){
  lightbox.style.display = "flex";
  player.src = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&rel=0`;
}

function closeVideo(){
  lightbox.style.display = "none";
  player.src = "";
}

document.getElementById("close").onclick = closeVideo;

videos.forEach(id => {
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg">
  `;

  div.onclick = () => openVideo(id);

  grid.appendChild(div);
});
