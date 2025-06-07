const button = document.getElementById("showHeartBtn");
const heart = document.querySelector(".heart");
const message = document.querySelector(".message");

const gif = document.querySelector(".gif");

button.addEventListener("click", () => {
  heart.classList.remove("hidden");
  message.classList.remove("hidden");
  gif.classList.remove("hidden");
  button.style.display = "none";
});

