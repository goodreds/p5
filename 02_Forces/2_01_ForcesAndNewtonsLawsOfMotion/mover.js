class Mover {
  constructor(x,y, m) {
    this.m = random(1,20);
    this.mass = this.m;
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0.1, 0.5);
    this.radius = sqrt(this.mass * 10);
    // this.topspeed = 5;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  edges() {
    if (this.position.y >= height - this.radius) {
      this.position.y = height - this.radius;
      this.velocity.y *= -1;
    } else if (this.position.y <= this.radius) {
      this.position.y = this.radius;
    }
    if (this.position.x >= width - this.radius) {
      this.position.x = width - this.radius;
      this.velocity.x *= -1;
    } else if (this.position.x <= this.radius) {
      this.position.x = this.radius;
      this.velocity.x *= -1;
    }
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  display() {
    fill('#222');
    stroke('#999');
    strokeWeight(2);
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
  }

  // checkEdges() {
  //   if (this.position.x > width) {
  //     this.position.x = 0;
  //   } else if (this.position.x > 0) {
  //     this.position.x = width;
  //   }

  //   if (this.position.y >= height) {
  //     this.position.y = 0;
  //   } else if (this.position.y < 0) {
  //     this.position.y = height;
  //   }
  // }
}

