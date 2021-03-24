
  // Use a custom probability distribution to vary the size of a step taken by the random walker. The step size can be determined by influencing the range of values picked. Can you map the probability to a quadratic function — i.e. making the likelihood that a value is picked equal to the value squared?

  let position;
  let prev;

  function setup() {
    createCanvas(945,438);
    background(255,80,0);
  }

  let t = 0; // moment in time

  function draw() {
    let n = noise(t); // The noise value for a specific moment in time

    print(n);

    let x = map(n, 0, 1, 0, width);
    ellipse(x, height/2, 16, 16);
    t += 0.01;
  }
