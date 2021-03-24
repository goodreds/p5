let canvasWidth = 840;
let canvasHeight = 438;
let ellipseSize = 16;

// Variables for position and speed of ball
// let x = 100;
// let y = 100;
// let xspeed = 1;
// let yspeed = 3.3;

// Above variables as vectors (a way of storing 2 or 3 values)
let position = createVector(100, 100);
let velocity = createVector(1, 3.3);

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  // frameRate(10);
  // background(255, 80, 0);
}

function draw() {
  background(255, 80, 0);
  // Move the ball according to its speed
  x = x + xspeed;
  y = y + yspeed;
  print(x);

  if ((x > width-(ellipseSize/2)) || (x < 0+(ellipseSize/2))) {
    xspeed = xspeed * -1;
  }
  if ((y > height-(ellipseSize/2)) || (y < 0+(ellipseSize/2))) {
    yspeed = yspeed * -1;
  }

  stroke(0);
  fill(175);
  ellipse(x, y, ellipseSize, ellipseSize);
}
