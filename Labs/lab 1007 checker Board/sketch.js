/*
**Lab 911:CheckerBoard
**
**
*/


//  Global variables

//  Global variables


var squares = [];
// put setup code here
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  // Create a function that loads the squares into an
  // array of square objects and call the function

  loadSquares();
    for(var i=0;i<squares.length;i++){
      squares[i].render();
    }
}
  //  traverse array
  function loadSquares(){
    for (var i=0; i<8; i++){
      for(var j=0; j<8; j++){ //nested for loop
        if(i%2===0){ //even number?
          if(j%2===0){
            var clr=color(255, 0, 0); //if even, blue color
          }
          if(j%2!==0){ //odd number?
            var clr=color(0); //if odd, purple color
          }
        }
        if(i%2!==0){
          if(j%2!==0){
            var clr=color(255,0, 0);
          }
          if(j%2===0){
            var clr=color(0);
          }
        }
        squares[j+(8*i)]= new Square(100*j,100*i,100,100, clr); //loads array with square objects
      }
    }
  }
