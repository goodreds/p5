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

class Walker {
  constructor() {
    this.tx = 0;
    this.ty = 10000;
  }

  step() {
    this.x = map(noise(this.tx), 0, 1, 0, width);
    this.y = map(noise(this.ty), 0, 1, 0, height);
    print("this.x: " + this.x + " this.y " + this.y);
    this.tx += 0.01;
    this.ty += 0.01;

    ellipse(this.x, this.y, 24, 24);
  }
}
