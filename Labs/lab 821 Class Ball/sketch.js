//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var b1, b2, b3, b4;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
<<<<<<< HEAD
  b1 = new Ball (random(800), random(800), random(-5.0, 5.0), random(-5.0,5.0));
  b2 = new Ball (random(800), random(800), random(-5.0, 5.0), random(-5.0,5.0));
  b3 = new Ball (random(800), random(800), random(-5.0, 5.0), random(-5.0,5.0));
  b4 = new Ball (random(800), random(800), random(-5.0, 5.0), random(-5.0,5.0));
}

=======
b1 = new Ball (random(800), random(800), random(-5.0, 5.0), random(-5.0,5.0))
b2 = new Ball (random(800), random(800), random(-5.0, 5.0), random(-5.0,5.0))
b3 = new Ball (random(800), random(800), random(-5.0, 5.0), random(-5.0,5.0))
b4 = new Ball (random(800), random(800), random(-5.0, 5.0), random(-5.0,5.0))

photo.mask(maskImage);
 image(photo, 0, 0);

}
function preload(){
  photo = loadImage('dino.jpg');
  maskImage = loadImage('assets/mask2.png');
}
>>>>>>> b011805ef074c76e6279a96c1d21572f29681932


//  The draw function is called @ 30 fps
function draw() {
  b1.run();
  b2.run();
  b3.run();
  b4.run();
}
