function setup() {
   createCanvas(windowWidth, windowHeight);
}

function draw() {
   background(0);
   fill('#49789D');
   noStroke();
   ellipse(mouseX,mouseY, 100, 100);
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}
