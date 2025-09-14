
///vocal, drum, bass, and other are volumes ranging from 0 to 100

var moonSize = 55
var hueWindow = (40) //45,85,95
var windowSize = (25, 25)

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB);
  background(225,95,35);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
  drawHouse (width / 2, height - 100)
  
  

//the expanding moon 
  moonSize = map(drum,0,100,100,150)
  

  fill(40,40,95,100)
  ellipse(370,150, moonSize)
  
  for(let i=0; i < 7; i++){
   ellipse(370,150, moonSize+(i*15))


   }
   
   hueWindow = map(bass,0,100,5,300)



  // noStroke();
   //for(let i=0; i<5;i++){

     // fill(200,90,100,80-i*15);
     // rect(235, 850, windowSize)//left
     // rect(305, 850, windowSize)//right window
   

}



//ai drew house shape i did colour and grass plus other things on house
function drawHouse(x, y) {
  rectMode(CENTER);
noStroke()
  
//grass
  fill (95,95,20)
  rect(x, y+45,600,140)
// base of house
  fill(35, 30, 85);
  rect(x, y, 120, 80);

  //chimney
 fill (10, 75, 35)
  rect(x-35,y-90, 35,65)

  // roof
  fill(10, 75, 55);
  triangle(x - 70, y - 40, x + 70, y - 40, x, y - 100);

  // door
  fill(10, 75, 55);
  rect(x, y + 15, 30, 50);

  // windows
  fill(40, hueWindow , 80);
  rect(x - 35, y - 10, 25, 25);
  rect(x + 35, y -10, 25, 25);
//grass
  fill (95,95,20)
  rect(x, y+35,600,10)
}
  
  //window colour chnaging
//let otherMap =map(other, x - 35, y - 10, 25, 25);
  

  //expanding moon
  //let
  
//function expandingMoon(){
  
  //moonsize = map(vocal,0,100,100,600)
  
//  ellipse(50,100, moonsize)
  //fill(40,40,95)

  
// for (let i = 1; i < 5; i++){

   //ellipse(100, 50,moonsize=(100*i))


  ////}

//}
// need to make smoke from chimney and light in windowns 
//cute moon in sky also 
//and sort lyrics?


  
  
  
  
  
  
  
  
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
