class Mover {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    // this.velocity = createVector();
    this.velocity = p5.Vector.random2D();
    this.velocity.mult(random(3));
    this.acceleration = createVector();
    this.topspeed = 3;
  }
  update() {
    let mouse = createVector(mouseX, mouseY);
    this.acceleration = p5.Vector.sub(mouse, this.position); // Using a static reference to sub() to give us a NEW p5.Vector pointing from one point to another
    this.acceleration.setMag(0.05);
    // To set the magnitude, first NORMALIZE the vector to its unit vector (of length 1) that can easily scale to any value
    // let anything = 0.23;
    // This is the manual way but p5.Vector already includes a method to do this as its such a common operation
    // this.acceleration.normalize();
    // this.acceleration.mult();
    this.velocity.add(this.acceleration);
    // this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
  }

  display() {
    noFill();
    stroke(255, 125, 50, 150);
    strokeWeight(20);
    ellipse(this.position.x, this.position.y, 16, 16);
  }
}

// one thing missing in this example is calculating the magnitude of acceleration which in gravity's case is inversely proportional to distance. In other words, the closer the object is to the mouse, the faster it accelerates.

// Try implementing the above example with a variable magnitude of acceleration, stronger when it is either closer or farther away.
