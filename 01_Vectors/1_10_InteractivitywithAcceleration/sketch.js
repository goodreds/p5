let canvasWidth = 640;
let canvasHeight = 640;
let mover;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  mover = new Mover(width / 2, height / 2);
}

function draw() {
  background('#ff6600');
  mover.update();
  mover.display();
}
