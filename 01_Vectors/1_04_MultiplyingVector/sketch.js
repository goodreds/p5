let canvasWidth = 840;
let canvasHeight = 438;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  background('#ff6600');

  let mouse = createVector(mouseX, mouseY);
  let center = createVector(width / 2, height / 2);
  mouse.sub(center);

  // Find the magnitude of the vector
  const m = mouse.mag();
  fill(0);
  rect(0,0,m,10);

  translate(width / 2, height / 2);
  strokeWeight(2);
  stroke(255);
  line(0, 0, mouse.x, mouse.y);
}

