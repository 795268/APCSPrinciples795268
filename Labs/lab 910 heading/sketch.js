//  Elena Campell
// 	lab 906 rotation
//  This is a comment
//  The setup function function is called once when your program begins
var ships = []; //declares array
var mainBall;
var mainBall2;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  loadObjects(70);

}


function draw() {
background(5,5,5,30);
runObjects();

}

function loadObjects(x){
  mainBall = new Ball(random(width/2), random(height/2), random (-4,4), random(-4,4), 1);
  mainBall2 = new Ball(random(width/2), random(height/2), random (-4,4), random(-4,4), 2);
  for(var i = 0; i < x; i++){
    ships[i]=new Ship(random(width), random(height), random (-1,1), random(-1,1), i+3);
  }
}

function runObjects(){
  mainBall.run();
  mainBall2.run();
  for(var i = 0; i < ships.length; i++){
    ships[i].run();
}
}
