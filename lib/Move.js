function validateMove(directionFacing, movePacmanOnBoard, x, y) {
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

};

module.exports.validateMove = validateMove;
