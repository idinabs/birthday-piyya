const loveBtn = document.getElementById('loveBtn');
const counterDisplay = document.getElementById('counter');
const formSection = document.getElementById('formSection');
const sendBtn = document.getElementById('sendBtn');
const wishlist = document.getElementById('wishlist');

let counter = 0;

loveBtn.addEventListener('click', () => {
  counter++;
  counterDisplay.textContent = counter;

  // Tampilkan form setelah 5 klik
  if (counter === 5) {
    formSection.classList.remove('hidden');
  }
});

sendBtn.addEventListener('click', () => {
  const message = encodeURIComponent(
    `Hai! Ini wishlist ulang tahunku:\n\n${wishlist.value}\n\nLove dari Piyya 💖`
  );
  const waUrl = `https://wa.me/?text=${message}`;
  window.open(waUrl, '_blank');
});
