\import randomcolor from 'randomcolor';

const canvas = document.getElementById('canvas');
const ctx = canvas ? canvas.getContext('2d') : null; // canvas varsa işlemi yap

// Canvas boyutlarını ayarlama
function resizeCanvas() {
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
}

// Animasyon işlevi
function animateCanvas() {
  if (!ctx) return; // Eğer context alınamıyorsa, animasyon başlatma
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvas'ı temizle
  ctx.beginPath();
  ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 50, 0, Math.PI * 2);
  ctx.fillStyle = randomcolor({ luminosity: 'bright', saturation: 'vivid' }); // Her seferinde rastgele renk
  ctx.fill();
  ctx.stroke();
  requestAnimationFrame(animateCanvas); // Bir sonraki frame için animasyonu tekrarla
}

// Sayfa yüklendiğinde ve pencere boyutu değiştiğinde canvas boyutlarını ayarla
window.addEventListener('resize', resizeCanvas);
resizeCanvas(); // Başlangıçta boyutlandır

animateCanvas(); // Animasyonu başlat

export default animateCanvas; // Canvas animasyonunu export ediyoruz
