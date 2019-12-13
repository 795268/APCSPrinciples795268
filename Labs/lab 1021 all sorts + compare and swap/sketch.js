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

  for (var x = 0; x<5000; x++){ //load array with random integers
    nums[x] = Math.floor(random(20));
  }
}

function draw() {
}

function selectionSort(nums){
  shuffle(nums, true); // shuffles the array so if other sorting method has already been called, it can still sort
  var compare = 0;
  var swaps = 0 ;
  console.log(nums);
  var t1 = millis();
  for(var i = 0; i < nums.length-1; i ++){ //moves end limit
      var small = i;
  for (var j = i+1 ; j < nums.length ; j++){
      if(nums[j] < nums[small]){
          small = j;
          compare++;
          }
        }
        swap(nums, i , small);
        swaps++;
      }
      var t2 = millis();
        console.log(nums); //prints sorted array to console
        console.log("Selection Sort Compares " + compare + " times");
        console.log ("Selection Sort Swaps " + swaps + " times");
        console.log ("Selection Sort Time: " + (t2-t1)/1000 + " seconds");

  }

  function insertSort(nums){
    shuffle(nums, true); // shuffles array
    var compare = 0;
    var swaps = 0 ;
    console.log(nums);
    var t1 = millis();
    for(var i = 1; i < nums.length ; i ++){ //moves end limit
    for (var j = i ; j >0 ; j --){
    if(nums[j] < nums[j-1]){
      compare++;
        swap(nums, j , j-1);
        swaps++;
        }
      }
    }
    var t2 = millis();
      console.log(nums); //prints sorted array to console
      console.log("Insert Sort Compares " + compare + " times");
      console.log ("Insert Sort Swaps " + swaps + " times");
      console.log ("Insert Sort Time: " + (t2-t1)/1000 + " seconds");

  }

function bubbleSort(nums){
  shuffle(nums, true);
  var swaps = 0 ;
  var compare = 0;
  console.log(nums);
  var t1 = millis();
  for(var i = nums.length -1; i > 0 ; i --){ //moves end limit
    for (var j = 0 ; j < nums.length; j ++){
      if (nums[j] < nums[j-1]){
        compare++;
            swap(nums, j, j-1);
            swaps++;
        }
      }
    }
    var t2 = millis();
          console.log(nums); //prints sorted array to console
          console.log("Bubble Sort Compares " + compare + " times");
          console.log ("Bubble Sort Swaps " + swaps + " times");
          console.log ("Bubble Sort Time: " + (t2-t1)/1000 + " seconds");

  }


function swap(nums, a, b){ //swap
    var temp = nums[a];
    nums[a] = nums[b];
    nums[b] = temp;
}
