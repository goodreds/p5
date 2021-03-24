let randomCounts = [];

function setup() {
  createCanvas(945,438);
  for (let i = 0; i < 15; i++) {
    randomCounts[i] = 0;
  }
}

function draw() {
  background(255,80,0);
  let index = floor(random(randomCounts.length));
  randomCounts[index]++;
  stroke(0);
  fill(175);
  let w = width / randomCounts.length;
  for (let x = 0; x < randomCounts.length; x++) {
    rect(x * w, height - randomCounts[x], w-1, randomCounts[x]);
  }
}

// Probability of drawing two aces from a deck of 52 cards?
// number of aces / total number of cards = 4 / 52
// Probability of two aces in a row = (4 / 52) * (4 / 52) = 0.00591716 ~ 0.5%
