console.log("JS CHARGÉ OK");

const grid = document.getElementById("grid");
const lightbox = document.getElementById("lightbox");
const player = document.getElementById("player");

const videos = [
  "G3zP-RhcgAE",
  "FT0frI2LMtY",
  "fLNfS5OR8t4"
];

videos.forEach(id => {
  const div = document.createElement("div");
  div.innerHTML = `
    <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg">
  `;

  div.onclick = () => {
    lightbox.style.display = "block";
    player.src = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1`;
  };

  grid.appendChild(div);
});

document.getElementById("close").onclick = () => {
  lightbox.style.display = "none";
  player.src = "";
};  "fLNfS5OR8t4",
  "3m3XVDgL7ww",
  "nfFwveM2eLA"
];

fallbackVideos.forEach(addVideo);
