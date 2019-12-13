//  Elena Campell
// 10/04 sorting
//  This is a comment
//  The setup function function is called once when your program begins

var list = [ 5, 9, 10, 6, 2, 1, 3, 0];
var order =[0,0,0,0,0,0,0,0];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {

}

function mySort(){

var small = 0;
var i = 0;
while(i< list.length){ //keeps track of length of sorted array
          for (var x = 0; x<list.length; x++){ //traverses list

              if (list[x] === small){ // if the value = small
                  order[x].push(small); //assign that value to order
                  i++; //increment to keep track of length of sorted array
              }

          }
          small ++; // increment small - looking for next biggest int

      }
      // for (var j = 0; j< order.length; j++){
      //   console.log(order[i]);
      // }
    }
