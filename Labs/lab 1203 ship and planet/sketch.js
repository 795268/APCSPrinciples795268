//  Elena Campell
// 12/03 ship and planet

var ship;
var planet;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
loadObjects();

}

//  The draw function is called @ 30 fps
function draw() {
  background(5,5,5, 20);
  runObjects();
}


function loadObjects(){
  planet = new Planet(random(width/2), random(height/2), random (-.4,.4), random(-.4,.4));
    ship =new Ship(random(width), random(height), random (-1,1), random(-1,1));
}

function runObjects(){
  planet.run();
    ship.run();
}
