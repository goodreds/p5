function setup() {
  createCanvas(945, 438);
}

function draw() {
  background(255, 80, 0);
  loadPixels();
  let inc = 0.01;
    let xoff = 0.0;
    for (let x = 0; x < width; x++) {
      let yoff = 0.0;
      for (let y = 0; y < height; y++) {
        // let bright = random(255);
        noiseDetail(2, 0.2);
        let bright = map(noise(xoff, yoff), 0, 1, 0, 255);
        let index = (x + y * width) * 4;
        pixels[index] = bright;
        pixels[index + 1] = bright;
        pixels[index + 2] = bright;
        yoff += inc;
      }
      xoff += inc;
    }
    inc += inc;
    updatePixels();
  }


