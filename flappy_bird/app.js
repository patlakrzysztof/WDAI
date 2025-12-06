//board
let board;
const boardWidth = 288;
const boardHeight = 512 + 112;
let context;

//menu
const menuX = boardWidth / 5;
const menuY = boardHeight / 5;
const menuWidth = 184;
const menuHeight = 267;
let menuImg;

//ground
const groundWidth = 288;
const groundHeight = 112;
const groundX = 0;
const groundY = boardHeight - groundHeight;
let groundImg;

//bird
const birdWidth = 34;
const birdHeight = 24;
let birdX = boardWidth / 2 - 15;
let birdY = boardHeight / 2;
let birdImg;
let birdImgs = [];

//flying animation
const birdFrames = [
  "./assets/Flappy Bird/yellowbird-upflap.png",
  "./assets/Flappy Bird/yellowbird-midflap.png",
  "./assets/Flappy Bird/yellowbird-downflap.png",
];

//pipes
let pipeArr = [];
const pipeWidth = 52;
const pipeHeight = 320;
const pipeX = boardWidth;
const pipeY = 0;

let topPipeImg;
let bottomPipeImg;

//physics
const speedX = -2; //pipe moving speed
let speedY = 0; //bird Y speed
const gravity = 0.4;

let showMenu = true;
let gameOver = false;
let dead = false;
let score = 0;
let frame = 0;
const maxUpAngle = -Math.PI / 4;
const maxDownAngle = Math.PI / 4;

let menu = {
  x: menuX,
  y: menuY,
  width: menuWidth,
  height: menuHeight,
};

let bird = {
  x: birdX,
  y: birdY,
  width: birdWidth,
  height: birdHeight,
};

let ground = {
  x: groundX,
  y: groundY,
  width: groundWidth,
  height: groundHeight,
};

window.onload = () => {
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d"); //drawing on board

  //imgs
  menuImg = new Image();
  menuImg.src = "./assets/UI/message.png";

  birdImg = new Image();
  birdImg.src = "./assets/Flappy Bird/yellowbird-midflap.png";

  birdFrames.forEach((src) => {
    let img = new Image();
    img.src = src;
    birdImgs.push(img);
  });

  topPipeImg = new Image();
  topPipeImg.src = "./assets/Flappy Bird/pipe-green-top.png";

  bottomPipeImg = new Image();
  bottomPipeImg.src = "./assets/Flappy Bird/pipe-green-bottom.png";

  groundImg = new Image();
  groundImg.src = "./assets/Flappy Bird/base.png";

  gameOverImg = new Image();
  gameOverImg.src = "./assets/UI/gameover.png";

  //draw bird
  birdImg.onload = () => {
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
  };

  //draw ground
  groundImg.onload = () => {
    context.drawImage(
      groundImg,
      ground.x,
      ground.y,
      ground.width,
      ground.height
    );
  };

  //draw start menu
  menuImg.onload = () => {
    context.drawImage(menuImg, menu.x, menu.y, menu.width, menu.height);
  };

  requestAnimationFrame(update);
  setInterval(placePipes, 1500);
  document.addEventListener("keydown", jump); //jumping
};

function update() {
  requestAnimationFrame(update); //update in loop

  if (gameOver) {
    context.drawImage(gameOverImg, boardWidth / 6, boardHeight / 3);
    context.fillStyle = "white";
    context.font = "20 px sans-serif";
    context.fillText("Score: " + score, boardWidth / 5, boardHeight / 2);
    return;
  }

  context.clearRect(0, 0, boardWidth, boardHeight); //clearing canvas
  frame++;

  if (showMenu) {
    context.drawImage(menuImg, menu.x, menu.y, menu.width, menu.height);
    context.drawImage(
      groundImg,
      ground.x,
      ground.y,
      ground.width,
      ground.height
    );
    return;
  }

  //bird
  speedY += gravity;
  bird.y = Math.max(bird.y + speedY, 0); // border at the top

  //flying animation
  let index = Math.floor(frame / 10) % birdImgs.length;
  birdImg = birdImgs[index];

  //rotating the bird
  context.save(); //save canvas to restore it after rotating a bird
  context.translate(bird.x + bird.width / 2, bird.y + bird.height / 2); //rotation point on the center of the bird
  let angle = Math.max(maxUpAngle, Math.min(maxDownAngle, speedY / 10));
  context.rotate(angle);
  context.drawImage(
    birdImg,
    -bird.width / 2,
    -bird.height / 2,
    bird.width,
    bird.height
  ); //because now center of the bird is (0,0) of the world

  //to not rotate other things and restore normal order
  context.restore();

  //draw ground
  context.drawImage(groundImg, ground.x, ground.y, ground.width, ground.height);
  if (collision(bird, ground)) {
    gameOver = true;
  }

  //pipes
  for (let i = 0; i < pipeArr.length; i++) {
    let pipe = pipeArr[i];
    if (!dead) {
      pipe.x += speedX; //moving pipe
    }
    context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

    if (!pipe.passed && bird.x > pipe.x + pipe.width) {
      score += 0.5; //because top and bottom pipe
      pipe.passed = true;
    }

    if (collision(bird, pipe)) {
      dead = true;
    }
  }

  while (pipeArr.length > 0 && pipeArr[0].x + pipeWidth < 0) {
    pipeArr.shift(); //remove pipe behind the screen
  }

  context.fillStyle = "white";
  context.font = "45px sans-serif";
  context.fillText(score, boardWidth - score.toString().length * 25 - 5, 45);
}

function placePipes() {
  if (dead || showMenu) {
    return;
  }

  let randomPipeY = pipeY - Math.random() * (pipeHeight / 2); //pipe lenght from 1/2 to 1 of its original lenght
  let holeHeight = boardHeight / 5;

  let topPipe = {
    img: topPipeImg,
    x: pipeX,
    y: randomPipeY,
    width: pipeWidth,
    height: pipeHeight,
    passed: false,
  };

  pipeArr.push(topPipe);

  let bottomPipe = {
    img: bottomPipeImg,
    x: pipeX,
    y: randomPipeY + pipeHeight + holeHeight,
    width: pipeWidth,
    height: pipeHeight,
    passed: false,
  };

  pipeArr.push(bottomPipe);
}

function jump(key) {
  if (key.code == "Space") {
    if (showMenu) {
      showMenu = false;
    }
    if (!dead) {
      //jump
      speedY = -6;
    }
    //reset game
    if (gameOver) {
      showMenu = true;
      bird.y = birdY;
      speedY = -6;
      pipeArr = [];
      score = 0;
      gameOver = false;
      dead = false;
    }
  }
}

// collision between 2 rectangles
function collision(bird, obstacle) {
  return (
    bird.x < obstacle.x + obstacle.width &&
    bird.x + bird.width > obstacle.x &&
    bird.y < obstacle.y + obstacle.height &&
    bird.y + bird.height > obstacle.y
  );
}

function displayNum(num) {
  // to make
}
