//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var shapes = [];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);

loadShapes(30, 30, 70);
}

//  The draw function is called @ 30 fps
function draw() {
  background (5,5,5);
  runShapes();
}

function loadShapes(x, y, z){
  for(var i = 0; i < x; i++){
    shapes[i] = new Ball (random(width), random(height), random(-5, 5), random(-5, 5));
  }
  for (var i = x; i < x+y; i++){
    shapes[i] = new Square (random(width), random (height), random(-8,8), random(-8,8));
  }
  for (var i = x+y ; i < x+y+z ; i++){
    shapes [i] = new Triangle (random(40, width-40), random (40, height-40), random(-8,8), random(-8,8));
  }
}

  function runShapes(){
    for(var i = 0; i< shapes.length; i++){
      shapes[i].run();
    }
  }
