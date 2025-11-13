window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('waveCanvas');
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  let waveOffset = 0;

  function drawWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#97d5a3';
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);

    for (let x = 0; x <= canvas.width; x++) {
      let y = 20 * Math.sin((x + waveOffset) * 0.02) + canvas.height / 2;
      ctx.lineTo(x, y);
    }

    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.fill();

    waveOffset += 2;
    requestAnimationFrame(drawWave);
  }

  drawWave();
});
