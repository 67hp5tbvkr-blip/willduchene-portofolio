const playlists = [
  "PLJpwSH_unsgI39IXHReNTR9w0hScxuLki",
  "PLJpwSH_unsgJBZNUqjH7zSsms_QcwmWNc",
  "PLJpwSH_unsgJVCaxQdOiQ7UIJvl2SxKCV",
  "PLJpwSH_unsgIyofHxEz-kRSEgMPZia5DH",
  "PLJpwSH_unsgIN3bCbNm-7RSkpsem3VbFM"
];

const grid = document.getElementById("grid");

function addVideo(id){
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg">
  `;

  div.onclick = () => openVideo(id);
  grid.appendChild(div);
}

function openVideo(id){
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("player").src =
    `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&rel=0`;
}

document.getElementById("close").onclick = () => {
  document.getElementById("lightbox").style.display = "none";
  document.getElementById("player").src = "";
};

/* IMPORTANT: on bypass API totalement */
const fallbackVideos = [
  "FT0frI2LMtY",
  "fLNfS5OR8t4",
  "3m3XVDgL7ww",
  "nfFwveM2eLA"
];

fallbackVideos.forEach(addVideo);
