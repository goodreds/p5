function setup() {
  createCanvas(945, 438);
  walker = new Walker();
}

function draw() {
  background(255, 80, 0);
  walker.step();
}

let tx;
let ty;
let prevX;
let prevY;
let currX;
let currY;

class Walker {
  constructor() {
    this.tx = 0;
    this.ty = 10000;
  }

  step() {
    this.prevX = this.x;
    this.prevY = this.y;

    this.x = map(noise(this.tx), 0, 1, 0, width);
    this.y = map(noise(this.ty), 0, 1, 0, height);

    this.currX = (this.prevX - this.x);
    this.currY = (this.prevY - this.y);

    print("this.x: " + floor(this.x) + " this.y: " + floor(this.y));
    //  + "\nprevStepSizeX: " + floor(this.prevStepSizeX) + " prevStepSizeY: " + floor(this.prevStepSizeY));
    this.tx += 0.01;
    this.ty -= 0.01;

    ellipse(width/2 - this.currX, height/2 - this.currY, 24, 24);
  }
}
