// Hide loading screen
window.onload = function () {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    createStars();
  }, 1800);
};

// Open the love letter
function openLetter() {
  document.getElementById("letter").style.display = "block";
  document.getElementById("letter").scrollIntoView({
    behavior: "smooth"
  });
}

// Celebrate with fireworks and show final message
function celebrate() {

  if (typeof confetti === "function") {

    const duration = 5000;
    const end = Date.now() + duration;

    (function frame() {

      confetti({
        particleCount: 6,
        angle: 60,
        spread: 70,
        origin: { x: 0 }
      });

      confetti({
        particleCount: 6,
        angle: 120,
        spread: 70,
        origin: { x: 1 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }

    })();

  }

  document.getElementById("final").style.display = "block";

  document.getElementById("final").scrollIntoView({
    behavior: "smooth"
  });
}

// Floating Hearts
function createHeart() {

  let heart = document.createElement("div");

  heart.className = "heart";

  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = (20 + Math.random() * 25) + "px";

  heart.style.animationDuration = (4 + Math.random() * 4) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);

}

setInterval(createHeart, 350);

// Twinkling Stars
function createStars() {

  for (let i = 0; i < 150; i++) {

    let star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";

    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDuration =
      (1 + Math.random() * 3) + "s";

    document.body.appendChild(star);

  }

}