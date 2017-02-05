var page = 0;
var eyeDirection = 0;
var jumpValue = 1
var jumpDir = 1

function setup() {
  createCanvas(500, 720); //canvas size
  background(120); // grey backgroun
  rectMode(CENTER);
  angleMode(DEGREES); // arc settings
}

function draw() {
  background(120); // grey background during movement
  monster(250, 200); //monster position 


  if(page == 0) {
    if(mouseX > 250) { // sets the position limit for activating eyes
      eyeDirection = min(eyeDirection + .5, 20);  // eyes moving to the right
    } else {
      eyeDirection = max(eyeDirection - .5, -20); //eyes moving to the left 
    }
  } else { 
      jumpValue = jumpValue + jumpDir; // jumping
      
      if (jumpValue == 100 || jumpValue == -100) { // limits
        jumpDir = jumpDir * -1; //changing direction
      }
  }
}

function mousePressed(x,y) { // activates chance from eyes to jump click
  page = 1 - page;
}


function monster(x,y) { // calling monster
  
  body(x, y + jumpValue);

}

  // draws the body of the monster at X and Y

function body(x,y) {
  eyes(eyeDirection + x, jumpValue - 0);
  noStroke();
  fill(52, 209, 0);
  rect(x, y + 200, 200, 200, 6);
  fill(255)
  rect(x, y + 200, 100, 150, 6);
  stroke(52, 209, 0);
  strokeWeight(20);
  line(x - 100, y + 175, x - 130, y + 175); //left arm
  line(x + 100, y + 175, x + 130, y + 175); //right arm
  noStroke();
  fill(52, 209, 0);
  arc(x - 140, y + 175, 40, 40, -90, 90); // left hand
  arc(x + 140, y + 175, 40, 40, 90, -90); // right hand
  //head
  fill(52, 209, 0);
  triangle(x - 75, y + 100, x, y + 15, x + 75, y + 100);
  //mouth
  stroke(255);  
  strokeWeight(3);
  line(x - 30, y + 80, x + 30, y + 80);
  //tooth
  fill(255);
  triangle(x - 20, y + 81, x - 18, y + 85, x - 15, y + 81);
  //legs
  stroke(52, 209, 0);
  strokeWeight(20);
  line(x - 50, y + 300, x - 50, y + 375);
  line(x + 50, y + 300, x + 50, y + 375);
  noStroke();
  fill(52, 209, 0);
  arc(x - 50, y + 400, 80, 80, -180, 0)
  arc(x + 50, y + 400, 80, 80, -180, 0)
}
  // eyes
function eyes(x,y) {
  stroke(52, 209, 0);
  strokeWeight(20);
  line(x, y + 260, x - 85, y + 150);
  line(x, y + 260, x + 85, y + 150);
  fill(255);
  noStroke();
  ellipse(x - 85, y + 150, 40);
  ellipse(x + 85, y + 150, 40);
  fill(0);
  noStroke();
  ellipse(x - 85, y + 160, 25);
  ellipse(x + 85, y + 160, 25);

}