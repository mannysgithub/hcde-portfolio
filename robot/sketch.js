function setup() {
  createCanvas(720, 489);
  smooth();
  strokeWeight(2);
}

function draw() {
    background(68, 122, 74);
  translate(mouseX, mouseY);
  //Neck
  stroke(102);
  line(266, 257, 266, 162);
  line(276, 257, 276, 162);
  line(286, 257, 286, 162);
  
  //Antennae
  line(276, 155, 246, 112);
  line(276, 155, 306, 56);
  line(276, 155, 342, 170);
  
  //Body
  noStroke();
  fill(232, 211, 162);
  ellipse(264, 377, 66, 66)
  fill(51, 0, 111);
  rect(219, 257, 90, 120);
  fill(255);
  rect(219, 274, 90, 6);
  
  //Head
  fill(143, 123, 76)
  ellipse(276, 155, 90, 90);
  fill(51, 0, 111);
  ellipse(288, 150, 28, 28);
  fill(0)
  ellipse(288, 150, 6, 6);
  fill(255);
  ellipse(263, 148, 10, 10);
  ellipse(296, 130, 8, 8);
  ellipse(305, 162, 6, 6);
}