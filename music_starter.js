
///vocal, drum, bass, and other are volumes ranging from 0 to 100


function draw_one_frame(words, vocal, drum, bass, other, counter) {
   background(34, 16, 64);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
  drawHouse (width / 2, height - 100)

}


function drawHouse(x, y) {
  rectMode(CENTER);
noStroke()
  // base of house
  fill(220, 180, 140);
  rect(x, y, 120, 80);

  // roof
  fill(150, 50, 50);
  triangle(x - 70, y - 40, x + 70, y - 40, x, y - 100);

  // door
  fill(100, 70, 50);
  rect(x, y + 20, 30, 50);

  // window
  fill(180, 220, 250);
  rect(x - 35, y - 10, 25, 25);
  

}


  
  
  
  
  
  
  
  
  // let bar_spacing = height / 10;
  // let bar_height = width / 12;
  // let bar_pos_x = width / 2;
 
// changes 
   // vocal bar is red
   //fill(200, 0, 0);
  // rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   //fill(0);
   //text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
  // fill(0, 200, 0);
  // rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   //fill(0);
   //text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
   //fill(50, 50, 240);
  // rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  // fill(0);
  /// text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is white
  // fill(200, 200, 200);
   //rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   //fill(0);
   //text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  // fill(255, 255, 0);
 
   // display "words"
  // textAlign(CENTER);
  // textSize(vocal);
  // text(words, width/2, height/3);


  // for (let i=3; i< vocal; i++){
      

      
  ////// }
