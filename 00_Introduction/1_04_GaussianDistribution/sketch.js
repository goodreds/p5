let slider;
function setup() {
  // put setup code here
  slider = createSlider(0,100,50,10);
  slider.position(10,10);
  slider.style('width', '80px');
  createCanvas(945,438);
  background(255,80,0);
  }

function draw() {
  // put drawing code here
  // The mean followed by the deviation
  let deviation = slider.value();
  let x = deviation * randomGaussian() + width/2;
  let y = deviation * randomGaussian() + height/2;
  let colR = floor(random(0,255));
  let colG = floor(random(0,255));
  let colB = floor(random(0,255));
  noStroke();
  fill(colR, colB, colG, 80);
  ellipse(x, y, 16, 16);
  print("slider val: " + floor(slider.value()));
}
// Consider a simulation of paint splatter drawn as a collection of colored dots. Most of the paint clusters around a central position, but some dots do splatter out towards the edges. Can you use a normal distribution of random numbers to generate the positions of the dots? Can you also use a normal distribution of random numbers to generate a color palette? Try attaching a slider to standard deviation.
