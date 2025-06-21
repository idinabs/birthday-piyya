const heart = document.getElementById('heart');
const message = document.getElementById('message');
const confetti = document.getElementById('confetti');
const ctx = confetti.getContext('2d');

confetti.width = window.innerWidth;
confetti.height = window.innerHeight;

let particles = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createConfetti() {
  for (let i = 0; i < 150; i++) {
    particles.push({
      x: confetti.width / 2,
      y: confetti.height / 2,
      dx: random(-5, 5),
      dy: random(-5, 5),
      radius: random(2, 5),
      color: `hsl(${random(0, 360)}, 100%, 60%)`,
    });
  }
}

function draw() {
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
}

function animate() {
  draw();
  requestAnimationFrame(animate);
}

heart.addEventListener('click', () => {
  message.classList.remove('hidden');
  createConfetti();
  animate();
});