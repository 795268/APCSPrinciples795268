//  Elena Campell
// Paddle game
//  The setup function function is called once when your program begins
var balls = []; //declares array
var paddle;
var difficulty;
var score =0;
var gameState = 1;
var win;
var btnEasy, btnMed, btnHard, btnInstructions, btnBTMI, btnBTME, btnReplay;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  newButton();
}

function draw() {
  background(5,5,5);
  if (gameState ===1){
    startGame(); //start screen
  }else if (gameState === 2){
    playGame(); //game screen
  }else if (gameState === 3){
    instructionsText();
  }else if (gameState === 4){ //game over screen
    endGame();
}
}

function newButton(){
  btnEasy = new Button(50, 450, 200, 200, color(78, 219, 18) );
  btnMed = new Button(300, 450, 200, 200, color (250,250,7));
  btnHard = new Button(550, 450, 200, 200, color(250, 0, 0));
  btnInstructions = new Button (200, 700, 400, 74, color(255));
  btnBTMI = new Button (150, 150, 500, 100, color(255));
  btnReplay = new Button (66, 100, 300, 100, color (255));
  btnBTME = new Button (432, 100, 300, 100, color(255));
}

function startGame(){ // choose easy med hard
  textSize(80);
  fill(255);
  textAlign(RIGHT);
  text ("PADDLE", 400, 200); //title
  textAlign(CENTER);
  text ("GAME", 400, 300);

  btnEasy.render(); //draws buttons
  btnMed.render();
  btnHard.render();
  btnInstructions.render();

  textSize (60); //text for buttons
  fill(255);
  text ("EASY", 55, 525, 200, 200);
  text ("HARD", 560, 525, 200, 200);
  textSize(45);
  text ("MEDIUM", 305, 530, 200, 200);
  fill (0);
  text ("INSTRUCTIONS", 205, 712, 400, 75);

  if (btnInstructions.isClicked()=== true){ //go to instructions page
    gameState = 3;
  }

  checkDifficulty(); // checks which difficulty is chosen
  if (difficulty === 'easy' || difficulty === 'medium'|| difficulty === 'hard'){
  if (difficulty === 'easy'){
  loadObjects(5);
  }else if (difficulty === 'medium'){
    loadObjects (15);
  }else if (difficulty === 'hard'){
    loadObjects (20);
    }
  gameState = 2; // play game
  }
}// end start game

function instructionsText(){ //code for instructions page

  textSize(30);
  fill(255);
  text("Move the mouse side to side to move the paddle.", 400, 350);
  text("Hit the green balls with the paddle to increase score", 400, 400);
  text("If you hit a red ball, your score will decrease", 400, 450);
  text("Once you have removed all the green balls, you win!", 400, 500);
  text("If your score goes below 0, you lose ", 400, 550);

  btnBTMI.render();
  fill(0);
  textSize(50);
  text("Back to Main Menu", 400, 215);

  if(btnBTMI.isClicked()=== true){ // back to main menu
      gameState = 1;
    }
}


function playGame(){
  fill (255);
  textSize (40);
  text ("SCORE:" + score, 100 , 50); // display score
  runObjects();
  if (checkRed() === true|| balls.length ===0){ // if all the red balls are gone, win
    gameState= 4;
    win = 'yes';
  } else if( score < 0 ){ // if negative score, lose
    gameState = 4;
    win = 'no';
  }
}


function endGame(){ //end game screen
  if (win === 'yes'){
    textSize(80);
    fill (255);
    text ("YOU WIN", 400, 450);
    text ("SCORE:" + score, 400, 550);
  }else if (win === 'no'){
    textSize(100);
    fill (255);
    text ("YOU LOSE", 400, 500);
  }

  btnReplay.render();
  btnBTME.render();

  fill(0);
  textSize(40);
  text ("REPLAY", 220, 145);
  text ("LEVEL", 220, 185)
  text ("BACK TO", 580, 145);
  text("MAIN MENU", 580, 185);
  if (btnBTME.isClicked()){ // go back to main menu
    gameState = 1;
    difficulty = 'startOver';
    clearEverything(); 
  }
  if (btnReplay.isClicked()=== true){ // replay level
    clearEverything();
    }
  }

function checkDifficulty(){ //check which difficulty button is isClicked
  if (btnEasy.isClicked()=== true){
     difficulty = 'easy';
   }
 if (btnMed.isClicked()===true){
    difficulty = 'medium';
  } if (btnHard.isClicked()=== true){
    difficulty = 'hard';
  }
}

function loadObjects(x){ // load paddle and balls
  paddle = new Paddle (400, 500, 150, 40);
  for(var i = 0; i < x; i++){
    balls[i]=new Ball(random(width), random(0, 200) , 4,4, i);
  }
}

function runObjects(){ //runs paddle and balls
  paddle.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
    }
  }

function checkRed(){ // to  check when all the green balls are gone
  var numRed = 0;
  for (var i = 0 ; i < balls.length; i++){
   if (balls[i].getID()% 2===0){
      numRed++;
      }
    }
  if (balls.length === numRed){
    return true;
  }
}

function clearEverything() { //clear gamestate and score for restarting level
  gameState = 1;
  score = 0 ;
}
