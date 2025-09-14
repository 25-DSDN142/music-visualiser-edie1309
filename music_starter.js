
///vocal, drum, bass, and other are volumes ranging from 0 to 100

var moonSize = 55
var hueWindow = (40) //45,85,95
var windowSize = (25, 25)
drops = []

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB);
  background(225,95,35);
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
 
    for (let i = 0; i < 5; i++){
    drops.push(new Drop(random(width), 0, 0))
  }
  
  for (let d of drops){
    d.show()
    d.update()
  }

}

class Drop{
  constructor(x, y){
    this.pos = createVector(x, y)
    this.vel = createVector(0, random(8, 11))
    this.length = random(20, 40)
    this.strength = random(255)
  }
  show(){
    stroke(255, this.strength)
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y-this.length)

  drawHouse (width / 2, height - 100)
  
  
//the expanding moon 
  moonSize = map(drum,0,100,100,150)
  

  fill(40,40,95,100)
  ellipse(370,150, moonSize)
  
  for(let i=0; i < 7; i++){
   ellipse(370,150, moonSize+(i*15))


   }
   
   hueWindow = map(bass,0,100,5,300)//changes light in windows 

   ///noStroke();
   fill(0,0,100,90)

   drawSmoke(200,200,60)
   

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




function drawSmoke(){

noStroke();
   fill(0,0,90,50)
   ellipse(200, 200, 260, 60);
  ellipse(230, 210, 230, 50);
  ellipse(170, 210, 230, 50);
  ellipse(200, 220, 400, 40);
  
}


// need to make smoke from chimney 


  
  
  
  
  
  
  
  
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
