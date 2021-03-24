class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }
  show () {
    stroke(0);
    point(this.x, this.y);
  }
  step() {
    let xstep = random(-1, 1);
    let ystep = random(-1, 1);
    // Random walker
    // this.x += xstep;
    // this.y += ystep;
    // Conditional logic for movement down and towards the right
    if (xstep <= 0) {
      this.x -= xstep;
    } else {
      this.x += xstep;
    }
    if (ystep <= 0) {
      this.y -= ystep;
    } else {
      this.y += ystep;
    }
  }
    // if (choice == 0) {
    //   this.x++;
    // } else if (choice == 1) {
    //   this.x--;
    // } else if (choice == 2) {
    //   this.y++;
    // } else {
    //   this.y--;
    // }
}


// A walker object
let walker;

function setup() {
  // put setup code here
  createCanvas(945,438);
  walker = new Walker;
  background(255,80,0);
  }

function draw() {
  // put drawing code here
  walker.step();
  walker.show();
  print(this.x, this.y);
  }
