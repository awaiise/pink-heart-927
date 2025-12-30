let musicStarted = false;
let photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg", "photo6.jpg"];
let index = 0;

function startMusic() {
  if (!musicStarted) {
    document.getElementById("bgMusic").play();
    musicStarted = true;
  }
}

function nextSlide() {
  index = (index + 1) % photos.length;
  document.getElementById("slide").src = "assets/" + photos[index];
}

function yesAnswer() {
  window.location.href = "letter.html";
}

// Floating hearts
setInterval(() => {
  let heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 300);

