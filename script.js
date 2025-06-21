const loveBtn = document.getElementById('loveBtn');
const counterDisplay = document.getElementById('counter');
const formSection = document.getElementById('formSection');
const sendBtn = document.getElementById('sendBtn');
const wishlist = document.getElementById('wishlist');
const confetti = document.getElementById('confetti');
const ctx = confetti.getContext('2d');

confetti.width = window.innerWidth;
confetti.height = window.innerHeight;

let counter = 0;
let particles = [];

loveBtn.addEventListener('click', () => {
  counter++;
  counterDisplay.textContent = counter;

  if (counter === 5) {
    formSection.classList.remove('hidden');
    triggerConfetti();
  }
});

sendBtn.addEventListener('click', () => {
  const message = encodeURIComponent(
    `Hai! Ini wishlist ulang tahunku:\n\n${wishlist.value}\n\nLove dari Piyya 💖`
  );
  const waUrl = `https://wa.me/?text=${message}`;
  window.open(waUrl, '_blank');
});

// Confetti effect
function random(min, max) {
  return Math.random() * (max - min) + min;
}

function triggerConfetti() {
  particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: confetti.width / 2,
      y: confetti.height / 2,
      dx: random(-4, 4),
      dy: random(-4, 4),
      radius: random(2, 5),
      color: `hsl(${random(0, 360)}, 100%, 60%)`
    });
  }
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, confetti.width, confetti.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    p.dy += 0.1;
  });
  requestAnimationFrame(animateConfetti);
}
