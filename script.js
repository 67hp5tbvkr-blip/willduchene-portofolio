const data = {
  showreel: ["G3zP-RhcgAE"],
  captations: ["FT0frI2LMtY", "3m3XVDgL7ww"],
  clips: ["fLNfS5OR8t4"],
  interviews: ["nfFwveM2eLA"]
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
    `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&rel=0`;
}

document.getElementById("close").onclick = () => {
  document.getElementById("lightbox").style.display = "none";
  document.getElementById("player").src = "";
};

function render(){
  Object.entries(data).forEach(([key, videos]) => {
    const container = document.getElementById(key);
    if(!container) return;

    videos.forEach(id => {
      container.appendChild(createCard(id));
    });
  });
}

render();
