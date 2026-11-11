// Imagens: por enquanto apontam para os arquivos do site do Canva.
// Para independência total, baixe cada imagem para a pasta /img e troque os links abaixo (ex.: "img/casal.jpg").
const BASE = "https://dolphin-2d895w.my.canva.site/wannessa-e-guilherme/_assets/media/";
const IMAGES = {
  cover:    BASE + "3fea7c89c27d5c0ec1a3aebf95c94d31.png",
  couple:   BASE + "a82f0d16207d1094f5ceb1db20185368.jpg",
  church:   BASE + "8fd31c79d90a52a414303c0044fb6ab4.png",
  hall:     BASE + "9e833fca3fa36d214c0c4db0aed5aa3f.png",
  flowerTL: BASE + "2d0710a04b326b07d26d322da1aef7d6.png",
  leafTR:   BASE + "3aca18dd92d092eb229ede8087ccb986.png",
  leafL:    BASE + "b5041eec3ec8f12eda93200af8d74871.png",
  leafBL:   BASE + "8849844f6229b4a8ad717136ea98aea4.png",
  leafR:    BASE + "ce1aadce40d26d73ffce30a99b104b80.png",
  flowerBR: BASE + "5b573ce9c0af1ea8d2084bad28f28f8b.png",
  ornL:     BASE + "13b46fe157c932878d51e9b1686b3cbc.png",
  ornR:     BASE + "5f050aa0af66f436d1e8f193f762960d.png"
};

document.querySelectorAll("[data-img]").forEach(img => {
  const src = IMAGES[img.dataset.img];
  if (src) img.src = src;
});

// Capa (envelope)
const cover = document.getElementById("cover");
cover.style.backgroundImage = `url("${IMAGES.cover}")`;
function openInvite() {
  cover.classList.add("is-open");
  document.body.classList.remove("is-locked");
  window.scrollTo(0, 0);
  setTimeout(() => cover.remove(), 1000);
}
cover.addEventListener("click", openInvite);

// Contagem regressiva (cerimônia: 28/08/2027 às 16:00, horário de Brasília)
const target = new Date("2027-08-28T16:00:00-03:00").getTime();
const el = id => document.getElementById(id);
const pad = n => String(n).padStart(2, "0");
function tick() {
  let diff = Math.max(0, target - Date.now());
  const d = Math.floor(diff / 864e5); diff %= 864e5;
  const h = Math.floor(diff / 36e5);  diff %= 36e5;
  const m = Math.floor(diff / 6e4);   diff %= 6e4;
  const s = Math.floor(diff / 1e3);
  el("cd-d").textContent = d;
  el("cd-h").textContent = pad(h);
  el("cd-m").textContent = pad(m);
  el("cd-s").textContent = pad(s);
}
tick();
setInterval(tick, 1000);
