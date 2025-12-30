let musicStarted = false;

function startMusic() {
  if (!musicStarted) {
    document.getElementById("bgMusic").play();
    musicStarted = true;
  }
}

// Slideshow
let photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];
let index = 0;

function nextSlide() {
  index = (index + 1) % photos.length;
  document.getElementById("slide").src = "assets/" + photos[index];
}

// Floating hearts
setInterval(() => {
  let heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 300);
