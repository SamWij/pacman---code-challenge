const readlineSync = require('readline-sync');

const direction = ["NORTH", "EAST", "SOUTH", "WEST"];
const move = ["MOVE", "LEFT", "RIGHT"];
const board = [
  "0,0","0,1","0,2", "0,3", "0,4",
  "1,0","1,1","1,2", "1,3", "1,4",
  "2,0","2,1","2,2", "2,3", "2,4",
  "3,0","3,1","3,2", "3,3", "3,4",
  "4,0","4,1","4,2", "4,3", "4,4"];

function placePacmanOnBoard() {
  var placePacman = readlineSync.question('Place Pacman on the Board e.g. 1,0,NORTH: ');
  validatePlacement(placePacman);
};

function movePacman(x,y, directionFacing) {
  var movePacmanOnBoard = readlineSync.question('Move Pacman forward (MOVE), left (LEFT), right (RIGHT): ');
  movePacmanOnBoard = movePacmanOnBoard.toUpperCase()


  if (directionFacing === "NORTH" && movePacmanOnBoard === "LEFT") {
      directionFacing === "WEST"
      x = x-1
      console.log("MOVE: "+directionFacing+"-"+x+","+y )
  } else if (directionFacing === "NORTH" && movePacmanOnBoard === "RIGHT") {
    directionFacing === "EAST"
    y = y+1
    console.log("MOVE: "+directionFacing+"-"+x+","+y )
  } else if (directionFacing === "EAST" && movePacmanOnBoard === "LEFT") {
    directionFacing === "NORTH"
    y = y+1
  } else if (directionFacing === "EAST" && movePacmanOnBoard === "RIGHT") {
    directionFacing === "SOUTH"
    y = y-1
  } else if (directionFacing === "WEST" && movePacmanOnBoard === "RIGHT") {
    directionFacing === "NORTH"
    y = y+1
  } else if (directionFacing === "WEST" && movePacmanOnBoard === "LEFT") {
    directionFacing === "SOUTH"
    y = y-1
  } else if (directionFacing === "SOUTH" && movePacmanOnBoard === "LEFT") {
    directionFacing === "EAST"
    y = y-1
  } else if (directionFacing === "SOUTH" && movePacmanOnBoard === "RIGHT") {
    directionFacing === "WEST"
    x = x-1
  } else if (directionFacing === "NORTH" && movePacmanOnBoard === "MOVE") {
    directionFacing === "NORTH"
    y = y+1
    console.log("MOVE: "+directionFacing+"-"+x+","+y )
  } else if (directionFacing === "SOUTH" && movePacmanOnBoard === "MOVE") {
    directionFacing === "SOUTH"
    y = y-1
  } else if (directionFacing === "EAST" && movePacmanOnBoard === "MOVE") {
    directionFacing === "EAST"
    x = x+1
  } else if (directionFacing === "WEST" && movePacmanOnBoard === "MOVE") {
    directionFacing === "WEST"
    x = x-1
  }

  console.log("NEW DIRECTION: " + x + "," + y + " - " + directionFacing)
  movePacman(x,y,directionFacing)

};


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

}

placePacmanOnBoard();
