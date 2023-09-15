function setup() {
   createCanvas(windowWidth, windowHeight);
}

function draw() {
   background('#222');
   ellipse(windowWidth / 2, windowHeight / 2, 100, 100);
   fill('#07C');
   noStroke();
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}
