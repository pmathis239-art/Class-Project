const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');

let waveOffset = 0;

function drawWaves() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#2c6f2d'; // main green
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);

    for (let x = 0; x <= canvas.width; x++) {
        const y = 20 * Math.sin((x + waveOffset) * 0.05) + canvas.height / 2;
        ctx.lineTo(x, y);
    }

    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.fill();

    waveOffset += 2; // speed of animation
    requestAnimationFrame(drawWaves);
}

drawWaves();
