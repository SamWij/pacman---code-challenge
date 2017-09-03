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
  var placePacman = readlineSync.question('Place Pacman on the Board e.g. PLACE 1,0,NORTH: ');
  validatePlacement(placePacman);
};

function movePacman(place, xyPosition, directionFacing) {
  var movePacman = readlineSync.question('Move Pacman forward (MOVE), left (LEFT), right (RIGHT): ');
};


function validatePlacement(placePacman) {
  var positionArray = placePacman.split(/[,\s]+|[,\s]+/g);
  positionArray.map(function(x){ return x.toUpperCase() });
  var place = positionArray[0]
  var xyPosition = positionArray[1]+","+positionArray[2]
  var directionFacing = positionArray[3]

  if ( place === "PLACE" && board.includes(xyPosition) && direction.includes(directionFacing)) {

    movePacman(place, xyPosition, directionFacing);

  } else {
      console.log("Error, please enter a valid place")
      placePacmanOnBoard();
  }

  console.log('Pacman Placed: ' + positionArray);
}

placePacmanOnBoard();
