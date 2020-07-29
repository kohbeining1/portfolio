var hue;
var rainbow = true;
var rate = .2;


function setup() {
  createCanvas(1903,1080);
  background(199, 178, 153);
  hue = 55;
}  

function draw() {
  // background(220);
}

function draw() {
    if (rainbow) {
    if (hue >90) {
        hue = 55;
    } else {
        hue += rate;
    }
	}
  colorMode(HSL, 360);
  noStroke();
  fill(hue, 170, 250);
  ellipse(mouseX, mouseY, 400, 400);
}