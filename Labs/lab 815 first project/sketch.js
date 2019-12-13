//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
  fill (255,255,255);
rect(300, 200, 200, 450);
fill( 0,0,150);
rect (300, 200, 200, 20);
fill(255);
triangle ( 300, 200, 500, 200, 400, 50);
fill ( 252, 186, 3);
triangle (300, 660, 400, 660, 350, 780);
triangle ( 405, 660, 500, 660, 452, 780);
fill (252, 78, 3);
triangle (315, 670, 385, 670, 350, 760 );
triangle( 420, 670, 485, 670, 450, 760);
}
