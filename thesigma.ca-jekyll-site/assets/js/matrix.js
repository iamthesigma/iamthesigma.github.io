const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = Array(256).join('1').split('');
let fontSize = 10;
const columns = canvas.width / fontSize;

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px arial';

    letters.forEach((y, index) => {
        const text = String.fromCharCode(3e4 + Math.random() * 33);
        const x = index * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
            letters[index] = 0;
        } else {
            letters[index] = y + fontSize;
        }
    });
}

setInterval(draw, 33);
