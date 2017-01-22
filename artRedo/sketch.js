function setup() {
  createCanvas(1024, 1000);
  angleMode(DEGREES);
}

function draw() {
  
  // dark vertical grey rectangle in center
  stroke(102);
  fill(95, 96, 99); // dark grey
  rect(385, 0, 190, 800); // rectangle behind circles
  
  // large pink half circle
  stroke(20);
  strokeWeight(2);
  fill(247, 146, 181); // pink
  ellipse(385, 194, 380, 380); // circle behind other shapes to show half circle
  
  // upper corner rectangle
  stroke(102); // border around the rectangle
  fill(235, 232, 225); // light grey inside
  rect(0, 0, 135, 250); // placing rectangle in upper left corner

  // left square
  fill(176, 174, 169); // medium grey
  rect(136, 0, 250,250); // slightly to the right square
  
  // dark grey sliver
  fill(125, 125, 125); // dark grey
  rect(136, 200, 250, 50); // rectangle under the square

  // line intersecting circle
  line(385, 200, 575, 200); // line bisecting half circle
  
  // large light grey rectangle
  fill(217, 217, 217); // light light grey
  rect(0, 251, 386, 196); // rectangle below
  
  // rect sliver
  fill(189, 189, 191); //light grey
  rect(383, 695, 290, 254); // behind circle to make sliver

  // huge pink circle
  stroke(20); // black stroke
  strokeWeight(4); // make thicker line
  fill(217, 167, 193); //darker pink
  ellipse(383, 669, 560, 560); //big circle behind triangle
  strokeWeight(2); //return stroke to regular
  
  // lower corner rectangle
  stroke(102); // lighter stroke
  fill(150, 150, 153); // medium dark grey
  rect(0, 448, 215, 500); //in the lower corner. long standing
  
  // large triangle
  fill(181, 179, 125); //ugly yellow
  triangle(0, 949, 215, 250, 430, 949); //large triangle in the corner
  
  // smaller inner triangle
  fill(252, 250, 187); //light yellow
  triangle(47, 800, 215, 250, 383, 800); //fit within larger triangle
  
  // line intersecting triamgle
  line(215, 250, 215, 949); // line bisecting triangle
  
  // line bordering dark grey vertical rectangle
  stroke(10); // dark stroke
  strokeWeight(8); // make line darker
  line(575,0, 575, 872); // vertical line stoping at bottom of circle
  strokeWeight(2); // retun sroke to original
  
  // upper larger right square
  stroke(102); // lighter color stroke
  fill(187, 188, 191); // medium grey
  rect(580, 0, 385, 465); // rectangle in upper right
  
  // upper right inner square
  fill(167, 168, 181); // grey
  rect( 665, 0, 300, 250); // smaller grey square in corner
  
  // rectangle bottom right corner
  fill(125, 124, 119); //dark grey
  rect(665, 669,300, 280); // rectangle in the corner
  
  // large half circle on the right
  fill(180, 192, 217); // light blue
  arc(964, 474, 769, 769, 90, 270); // large arc on the right
 
  // rectangle behind white rect
  fill(125, 124, 119); // whitish grey
  rect(580, 465, 330, 247); // far right just below center behind white
  
  // rectangle middle far right
  fill(230, 227, 207); // grey cream
  rect(665, 232, 300, 232); // rectangle on the right just above center
  
  // arc on top of circle
  fill(161, 161, 161); // light grey
  arc(580, 669, 168, 400, 269, 451); // the right tip of huge circle

  // rectangle far right below center
  stroke(102);
  fill(240, 239, 233); // whitish grey
  rect(665, 465, 300, 248); // far right just below center
}