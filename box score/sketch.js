/* Manuel Zetino
  last edited 2/25/17
  Box score from Kobe's 81 point game, when you click it will log a point for each player up until all points accounted for
*/  

var raps = ["C. Bosh", "M. Bonner", "M. James", "M. Peterson", "J. Rose", "E. Williams","P. Sow", "C. Villanueva", "J. Graham", "J. Calderon"]; //players on raptors
var laks = ["L. Odom", "K. Bryant", "C. Mihm", "K. Brown", "S. Parker", "B. Cook", "D. George", "L. Walton", "S. Vujacic"] // players on lakers
var rapsPoints = ["18","12", "26", "7", "17", "0", "4", "13","3", "4"] // raptors points
var laksPoints = ["8", "81", "12", "3", "13", "2", "0", "0", "3"] // lakers points
var ellipseObjsr = [];
var ellipseObjsl = [];
var showgraph = false




function setup() {
  createCanvas(1000, 800); // canvas size
  background(148, 144, 135); // grey background


}

function draw() {
  drawLabels(); // points axis
  fill(148, 144, 135); // rectangle for improved stroke
  rect(25, 25, 121, 800); // rectangle for improved stroke

  if(showgraph == true) { // for mouse press
  noStroke();
  fill(255); // white ellipse
  //raptors ellipse for wach player
  for (i = 0; i < raps.length; i++) {
    ellipseObjsr.push({xpos: 154, ypos: 119 + i * 30});
  }  
  // raptors movement of points bar
  for (i = 0; i < ellipseObjsr.length; i ++) {
    ellipse(ellipseObjsr[i].xpos, ellipseObjsr[i].ypos, 10, 10);
    ellipseObjsr[i].xpos = min(ellipseObjsr[i].xpos +1, 154 + rapsPoints[i] *10);
  }
  // ellipse for all players
  for (i = 0; i < laks.length; i++) {
    ellipseObjsl.push({xpos: 154, ypos: 445 + i * 30});
  }  
  // movement of points bar for players
  for (i = 0; i < ellipseObjsl.length; i++) {
    ellipse(ellipseObjsl[i].xpos, ellipseObjsl[i].ypos, 10, 10);
    ellipseObjsl[i].xpos = min(ellipseObjsl[i].xpos +1, 154 + laksPoints[i] *10);
  }
  }

// raps players names
  for (i = 0; i < raps.length; i++) {
    noStroke();
    fill(153, 23, 38);
    textSize(20);
    text(raps[i], 25, i * 30 + 125);
  } 


//  lakers players names 
  for (i = 0; i < laks.length; i++) {
    noStroke();
    fill('purple');
    textSize(20);
    text(laks[i], 25, i * 30 + 450);
  }

// points axis
  function drawLabels() {
    noStroke();
    textSize(11); // sets the text size to 11
    // points
    for (i = 0; i < 27; i++) {        
      text(i * 5, 154 + i * 50, 75);
  }
}
  
}

//when mouse is clicked the points will move. 

function mousePressed() {
  showgraph = true
  


}


