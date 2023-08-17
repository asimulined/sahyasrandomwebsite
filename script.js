const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const bird = { x: 50, y: canvas.height / 2, radius: 20, velocityY: 0, gravity: 0.6 };
const pipes = [];
let score = 0;
let gameInterval;

const backgroundImage = new Image();
backgroundImage.src = "background.jpg";

const pipeImage = new Image();
pipeImage.src = "pipe.png";

function drawBird() {
    // Same as before
}

function drawPipes() {
    pipes.forEach(pipe => {
        pipe.x -= 2; // Adjust speed as needed

        ctx.drawImage(pipeImage, pipe.x, 0, pipe.width, pipe.top);
        ctx.drawImage(pipeImage, pipe.x, pipe.bottom, pipe.width, canvas.height - pipe.bottom);

        // Collision detection and scoring
        // Same as before
    });
}

function drawScore() {
    ctx.font = "24px Arial";
    ctx.fillStyle = "#000";
    ctx.fillText(`Score: ${score}`, 10, 30);
}

function drawBackground() {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBackground();
    drawBird();
    drawPipes();
    drawScore();

    if (bird.y + bird.radius > canvas.height) {
        gameOver();
    }

    bird.velocityY += bird.gravity;
    bird.y += bird.velocityY;

    gameInterval = requestAnimationFrame(draw);
}

// Rest of the code remains the same

// Load images before starting the game
backgroundImage.onload = () => {
    pipeImage.onload = () => {
        startGame();
    };
};

// Rest of the code remains the same
