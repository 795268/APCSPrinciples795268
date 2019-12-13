//  Elena Campell
// 12/12 slider

var ships = [];
var planet;
var attraction;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
loadObjects();
attraction = createSlider(0,5,1);
attraction.position(200,400);
}

//  The draw function is called @ 30 fps
function draw() {
  background(5,5,5, 20);
  runObjects();
}


function loadObjects(){
  planet = new Planet(random(width/2), random(height/2), random (-.4,.4), random(-.4,.4));
for(var i = 0; i < 5; i++){
    ships[i] =new Ship(random(width), random(height), random (-1,1), random(-1,1));
  }
}

function runObjects(){
  planet.run();
  for(var i = 0; i < 5; i++){
    ships[i].run();
  }
}
