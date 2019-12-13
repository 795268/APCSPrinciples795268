//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var a;
var b;
var c;
var d;
var e;
var f;

var z;
var y;


function setup() {
  a = 200;
  b = 50;
  c = 660;
  d = 780;
  e = 670;
  f = 760;

  z = 300;
  y = 350;
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {
a = a-1;
b = b-1;
c = c-1;
d = d-1;
e =e-1;
f = f-1;

z = z+1;
y = y+1;
fill(150) // smoke
ellipse (340,y, 60, 60)
ellipse (410,y, 60, 60)
ellipse (370,y, 60, 60)
ellipse (460,y, 60, 60)


ellipse(350, z, 40, 40)



  fill (255,255,255)
rect(300, a, 200, 450)
fill( 0,0,150)
rect (300, a, 200, 20)
fill(255)
triangle ( 300, a, 500, a, 400, b)
fill ( 252, 186, 3)
triangle (300, c, 400, c, 350, d)
triangle ( 405, c, 500, c, 452, d)
fill (252, 78, 3)
triangle (320, e, 380, e, 350, f )
triangle (420, e, 480, e, 450, f)

}
