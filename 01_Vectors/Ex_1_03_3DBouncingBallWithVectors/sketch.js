let canvasWidth = 840;
let canvasHeight = 438;
let ellipseSize = 16;
let position;
let velocity;
let depth;

// Extend the bouncing ball with vectors example into 3D. Can you get a sphere to bounce around a box?

function setup() {
  createCanvas(canvasWidth, canvasHeight, WEBGL);
  position = createVector(10, 10, 10);
  velocity = createVector(3,2,1);
  // frameRate(60);
  // background(255, 80, 0);
}

function draw() {
  background('#ff6600');
  // move cube and ball to centre
  translate(0, 0, 0);
  // translate(width/2+ellipseSize, height/2-ellipseSize, -height/2);
  // rotate cube and ball to appeciate the 3D
  rotateX(-10);
  rotateY(2);
  rotateZ(3);

  // draw cube
  noFill();
  stroke(0);
  box(200);

  // Move the ball according to its speed
  translate(position.x, position.y, position.z);
  position.add(velocity);

  if ((position.x > 100 - ellipseSize / 2) || (position.x < -100 + ellipseSize / 2)) {
    velocity.x = velocity.x * -1;
  }
  if ((position.y > 100 - ellipseSize / 2) || (position.y < -100 + ellipseSize / 2)) {
    velocity.y = velocity.y * -1;
  }
  if ((position.z > 100 - ellipseSize / 2) || (position.z < -100 + ellipseSize / 2)) {
    velocity.z = velocity.z * -1;
  }

  stroke(0);
  fill(175);
  sphere(ellipseSize);
  // ellipse(position.x, position.y, ellipseSize, ellipseSize);
}
