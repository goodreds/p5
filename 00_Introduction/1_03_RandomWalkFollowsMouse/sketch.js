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
    let xstep = random(0,1);
    let ystep = random(0,1);

    // Create a random walker with dynamic probabilities. For example, can you give it a 50% chance of moving in the direction of the mouse?
    let xmouse = mouseX;
    let ymouse = mouseY;
    print("xstep: " + floor(this.x) + " ystep: " + floor(this.y) );
    print("xmouse: " + xmouse + " ymouse: " + ymouse);
    // Conditional logic for movement down and towards the right
    if (xstep <= 0.5) {
      if (floor(this.x) <= xmouse) {
        this.x += xstep;
      } else {
        this.x -= xstep;
      }
    }
    if (ystep <= 0.5) {
      if (floor(this.y) <= ymouse) {
        this.y += ystep;
      } else {
        this.y -= ystep;
      }
    }

  }
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
