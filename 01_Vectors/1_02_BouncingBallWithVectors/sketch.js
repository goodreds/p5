let canvasWidth = 840;
let canvasHeight = 438;
let ellipseSize = 16;
let position;
let velocity;

// Variables for position and speed of ball
// let x = 100;
// let y = 100;
// let xspeed = 1;
// let yspeed = 3.3;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  // Above variables as vectors (a way of storing 2 or 3 values)
  position = createVector(100, 100);
  velocity = createVector(1, 2.5);
  // frameRate(60);
  // background(255, 80, 0);
}

function draw() {
  background(255, 80, 0);
  // Move the ball according to its speed
  position.add(velocity);

  if ((position.x > width - ellipseSize / 2) || (position.x < 0 + ellipseSize / 2)) {
    velocity.x = velocity.x * -1;
  }
  if ((position.y > height - ellipseSize / 2) || (position.y < 0 + ellipseSize / 2)) {
    velocity.y = velocity.y * -1;
  }

  stroke(0);
  fill(175);
  ellipse(position.x, position.y, ellipseSize, ellipseSize);
}
