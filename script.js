const button = document.getElementById("showHeartBtn");
const heart = document.querySelector(".heart");
const message = document.querySelector(".message");
const gif = document.querySelector(".gif");
const heartsContainer = document.querySelector(".hearts-container");

button.addEventListener("click", () => {
  heart.classList.remove("hidden");
  message.classList.remove("hidden");
  gif.classList.remove("hidden");
  button.style.display = "none";

  // Corações flutuando
  setInterval(createFloatingHeart, 300);
});

function createFloatingHeart() {
  const miniHeart = document.createElement("div");
  miniHeart.classList.add("heart-shape");

  // Posição horizontal aleatória
  miniHeart.style.left = `${Math.random() * 100}%`;

  // Duração aleatória
  miniHeart.style.animationDuration = `${3 + Math.random() * 2}s`;

  heartsContainer.appendChild(miniHeart);

  // Remover depois da animação
  setTimeout(() => {
    miniHeart.remove();
  }, 5000);
}
