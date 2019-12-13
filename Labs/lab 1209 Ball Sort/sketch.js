//  elena Campell
// 	12/09
//  This is a comment
//  The setup function function is called once when your program begins
var balls=[];

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(200,200,200);
  fill(200, 30, 150);
  loadBalls(20);
  runBalls();
  frameRate(5);
}

//  The draw function is called @ 30 fps
function draw() {
  bubbleSort();

}

function loadBalls(n){
  for (var i =0 ; i < n; i++){
    var red = random(0,255);
    balls[i] = new Ball (i*40+20, 400, color(red, 0, 0), red);
  }
}

function runBalls(){
for (var i =0 ; i<balls.length; i++){
  balls[i].run();
    }
}

function  update(){
  for(var i=0; i<balls.length; i++){
    balls[i].set(i);
  }
  background(200,200,200);
  runBalls();
}

function bubbleSort(){

  for (var j = 0; j < balls.length-1; j++){
    if (balls[j].getColor()< balls[j+1].getColor()){
    swap(balls, j, j+1);
    update();
    }
  }
}

function swap(arr, a, b){ //swap
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
