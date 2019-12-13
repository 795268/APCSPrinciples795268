//  Elena Campell
// 	10/ 17 insert sort
//  This is a comment
//  The setup function function is called once when your program begins
var bars=[0] ;
var barWidth, barHeight;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBars();
  frameRate(5);
  runBars();

}

function draw() {
bubbleSort();
}

function loadBars(){

  for (var i = 0; i< 40; i++){
    barWidth = (width/40);
    barHeight = Math.floor(random(1, height));
    bars[i]= new Bar(i*barWidth, height-barHeight, barWidth, barHeight);
  }
}
function runBars(){
  for (var i = 0; i<bars.length; i++){
    bars[i].run();
  }
}

function  update(){
  for(var i=0; i<bars.length; i++){
    bars[i].set(i);
  }
  background(0);
  runBars();
}

function bubbleSort(){

  for (var j = 0; j < bars.length-1; j++){
    if (bars[j].getHeight()> bars[j+1].getHeight()){
    swap(bars, j, j+1);
    update();
    }
  }
}

function swap(arr, a, b){ //swap
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
