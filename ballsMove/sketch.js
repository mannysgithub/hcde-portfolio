
var x = 25;
var y = 175;


function setup() {
  createCanvas(300, 200);
  background(120, 200, 255);
  
}

function draw() {
  background(120, 200, 255);
  noStroke();
  fill(255, 0, 0);
  ellipse(x, y, 50, 50);
  
    fill(255, 0, 0);
  ellipse(x, y + 50, 50, 50)
 
  x = min(x + 1, 100);
  y = max(y - 1, 100);
  
}