//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var x, y, x2, y2, x3, y3;
var speedX, speedY, speedX2, speedY2, speedX3, speedY3;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  x = 200;
  y = 350;
  x2= random(800);
  y2 = random(800);
  speedX = random(-4.0, 4.0);
  speedY = random (-4.0, 4.0);
  speedX2 = random(-4.0, 4.0);
  speedY2 = random (-4.0, 4.0);
  speedX3 = random(-4.0, 4.0);
  speedY3 = random (-4.0, 4.0);



}

//  The draw function is called @ 30 fps
function draw() {

x = x + speedX;
y = y + speedY;
x2 = x2 + speedX2;
y2 = y2 + speedY2;
x3 = x3 + speedX3;
y3 = y3 + speedY3;

if ( x < 0 ){
  speedX = -1* speedX;
  speedY = -speedY;
}
if ( x> width){
  speedX = -speedX;
  speedY = -speedY;
}
if (y < 0 ){
speedY = -1 * speedY;
// speedX = -speedX;
}
if (y < height){
speedY = - speedY;
// speedX = -speedX;
2}

background (20,20,20);
fill( 68, 218, 24);
ellipse (x, y+60, 80, 80);
fill ( 238, 19, 155);
ellipse (x2,y2, 20, 20);
fill( 19, 238, 201);
ellipse (x3, y3, 50, 50);

}
