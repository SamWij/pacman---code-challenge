const readlineSync = require('readline-sync');

//Set Pacman variables
const direction = ["NORTH", "EAST", "SOUTH", "WEST"];
const move = ["MOVE", "LEFT", "RIGHT"];
const board = [
  "0,0","0,1","0,2", "0,3", "0,4",
  "1,0","1,1","1,2", "1,3", "1,4",
  "2,0","2,1","2,2", "2,3", "2,4",
  "3,0","3,1","3,2", "3,3", "3,4",
  "4,0","4,1","4,2", "4,3", "4,4"];


//User enters placement of Pacman on board.
function placePacmanOnBoard() {
  var placePacman = readlineSync.question('Place Pacman on the Board e.g. PLACE 1,0,NORTH: ');
  validatePlacement(placePacman);
};
//User moves Pacman on board
function movePacman(x,y, directionFacing) {
  var movePacmanOnBoard = readlineSync.question('Move Pacman forward (MOVE), left (LEFT), right (RIGHT): ');
  movePacmanOnBoard = movePacmanOnBoard.toUpperCase()

  validateMove(directionFacing, movePacmanOnBoard, x, y)

  movePacman(x,y,directionFacing)

};

//validates the  users entry to determine a valid move
function validatePlacement(placePacman) {
  var positionArray = placePacman.split(/[,\s]+|[,\s]+/g);
  positionArray.map(function(x){ return x.toUpperCase() });
  var xyPosition = positionArray[1]+","+positionArray[2]
  var x = parseInt(positionArray[1])
  var y = parseInt(positionArray[2])
  var directionFacing = positionArray[3]

  if (board.includes(xyPosition) && direction.includes(directionFacing)) {
    movePacman(x, y, directionFacing);
  } else {
      console.log("Error, please enter a valid place")
      placePacmanOnBoard();
  }

};

//validates and calculates the users move entered
function validateMove(directionFacing, movePacmanOnBoard, x, y) {
  console.log("here")
  if (directionFacing === "NORTH"){
    switch(movePacmanOnBoard) {
    case "RIGHT": x = x + 1;
      break;
    case "LEFT": x = x - 1;
      break;
    case "MOVE": y = y + 1;
      break;
    }
  } // Close North
  else if (directionFacing === "EAST"){
    switch(movePacmanOnBoard) {
    case "RIGHT": y = y + 1;
      break;
    case "LEFT": y = y - 1;
      break;
    case "MOVE": x = x + 1;
      break;
    }
  } //Close East
  else if (directionFacing === "WEST"){
    switch(movePacmanOnBoard) {
    case "RIGHT": y = y + 1;
      break;
    case "LEFT": y = y - 1;
      break;
    case "MOVE": x = x - 1;
      break;
    }
  } //Close West
  else if (directionFacing === "SOUTH"){
    switch(movePacmanOnBoard) {
    case "RIGHT": x = x - 1;
      break;
    case "LEFT": x = x + 1;
      break;
    case "MOVE": y = y - 1;
      break;
    }
  } //Close South
  else {
    console.log("No valid move given");
  } //Close Else

  if (directionFacing === "NORTH"){
    switch(movePacmanOnBoard) {
    case "RIGHT": directionFacing = "EAST";
      break;
    case "LEFT": directionFacing = "WEST";
      break;
    case "MOVE": directionFacing = "NORTH"
      break;
    }
  } // Close North
  else if (directionFacing === "EAST"){
    switch(movePacmanOnBoard) {
    case "RIGHT": directionFacing = "SOUTH"
      break;
    case "LEFT": directionFacing = "NORTH"
      break;
    case "MOVE": directionFacing = "EAST";
      break;
    }
  } //Close East
  else if (directionFacing === "WEST"){
    switch(movePacmanOnBoard) {
    case "RIGHT": directionFacing = "NORTH"
      break;
    case "LEFT": directionFacing = "SOUTH"
      break;
    case "MOVE": directionFacing = "WEST"
      break;
    }
  } //Close West
  else if (directionFacing === "SOUTH"){
    switch(movePacmanOnBoard) {
    case "RIGHT": directionFacing = "WEST"
      break;
    case "LEFT": directionFacing = "EAST"
      break;
    case "MOVE": directionFacing = "SOUTH";
      break;
    }
  } //Close South
  else {
    console.log("No valid move given");
  } //Close Else

  console.log("NEW DIRECTION: " + x + "," + y + " - " + directionFacing)

};

placePacmanOnBoard();
