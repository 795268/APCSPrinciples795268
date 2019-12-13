//  Elena Campell
// warm up 12/11
//  This is a comment
//  The setup function function is called once when your program begins
var nums  =[];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  loadNumbers();
}

//  The draw function is called @ 30 fps
function draw() {

}

function loadNumbers(){
  for (var i = 0; i < 11; i ++){
    nums[i] = Math.floor(random (1,100));
  }
}

function mySort(){
  for(var i = nums.length -1; i > 0 ; i --){ //moves end limit
    for (var j = 0 ; j < nums.length; j ++){
      if (nums[j] < nums[j-1]){
        swap(nums, j, j-1);
        }
      }
    }
    console.log(nums);
}
function swap(nums, a, b){ //swap
    var temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
}

function logNumbers(){
for (var i = 0; i < nums.length; i ++){
  console.log(nums[i]);
    }
}

function findAvg(){
  var sum = 0 ;
  var avg = 0;
  for (var i = 0; i < nums.length; i ++){
    sum += nums[i];
  }
    avg  = sum / nums.length
    console.log(avg);
}

function findMedian(){
  var half = (nums.length/2)-.5;
  var mid = nums[half];
  console.log(mid);
}
