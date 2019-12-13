//  Elena Campell
// 	10/ 17 insert sort
//  This is a comment
//  The setup function function is called once when your program begins
var nums=[0] ;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  for (var x = 0; x<10; x++){ //load array with random integers
    nums[x] = Math.floor(random(20));
  }

}

function draw() {
}

function insertSort(nums){
  console.log(nums);
  for(var i = 1; i < nums.length ; i ++){ //moves end limit
  for (var j = i ; j >0 ; j --){
  if(nums[j] < nums[j-1]){
      swap(nums, j , j-1);
      }
    }
  }
    console.log(nums); //prints sorted array to console
  }

function swap(nums, a, b){ //swap

    var temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
}

function median (nums){ //finds median of list
if (nums.length % 2 === 0){ //if the list has an even number of elements
 var half = nums.length/2;
 var med = nums[half] + nums[half+1];
 var medEven = med/2;
 console.log(medEven);
  }
else if(nums.length %2 ===1){ // if the list has an odd number of elements
  var half = nums.length/2;
  var medOdd = nums[half];
  console.log(medOdd);
  }
}
