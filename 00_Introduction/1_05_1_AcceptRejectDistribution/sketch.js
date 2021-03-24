
  // A Gaussian random walk is defined as one in which the step size (how far the object moves in a given direction) is generated with a normal distribution. Implement this variation of the random walk.class Walker {

    class Walker {
      constructor() {
      // start from the middle of the canvas
      this.x = width / 2;
      this.y = height / 2;
    }
    show () {
      stroke(0);
      point(this.x, this.y);
    }
    step() {
      let xstep = randomGaussian();
      let ystep = randomGaussian();
      // Random walker
      this.x += xstep;
      this.y += ystep;
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
