// A walker object
let walker;
let canvasWidth = 840;
let canvasHeight = 438;
let dimensions;

function setup() {
  // put setup code here
  createCanvas(canvasWidth, canvasHeight);
  walker = new Walker;
  background(255, 80, 0);
}

function draw() {
  // put drawing code here
  walker.step();
  walker.show();
  // print(this.x, this.y);
}
class Walker {
  constructor() {
    dimensions = createVector((width/2), (height/2));
    // this.x = width / 2;
    // this.y = height / 2;
  }
  show() {
    stroke(0);
    point(dimensions.x, dimensions.y);
  }
  step() {
    let xstep = random(-1, 1);
    let ystep = random(-1, 1);
    // Random walker
    dimensions.x += xstep;
    dimensions.y += ystep;
  }
}
