const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = canvas.offsetWidth;
let height = canvas.height = canvas.offsetHeight;

let waveOffset = 0;

function drawWave() {
  ctx.clearRect(0, 0, width, height);

  // Draw smooth wave
  ctx.fillStyle = '#97d5a3'; // lighter green
  ctx.beginPath();
  ctx.moveTo(0, height / 2);

  for (let x = 0; x <= width; x++) {
    let y = 20 * Math.sin((x + waveOffset) * 0.02) + height / 2;
    ctx.lineTo(x, y);
  }

  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.closePath();
  ctx.fill();

  waveOffset += 2; // wave speed
  requestAnimationFrame(drawWave);
}

// Responsive canvas
window.addEventListener('resize', () => {
  width = canvas.width = canvas.offsetWidth;
  height = canvas.height = canvas.offsetHeight;
});

drawWave();
