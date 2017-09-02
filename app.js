const flatiron = require('flatiron'),
  app = flatiron.app;
  path = require('path');

//to start the app: node app.js pacman

app.use(flatiron.plugins.cli, {
  dir: path.join(__dirname, 'cmds'),

  usage: [
    'Welcome to Pacman',
    'Your command didn\'t do anything.',
    'This is expected.'
  ]

});

app.cmd('pacman', function () {
  // PLACE X,Y,F
  // MOVE
  // LEFT
  // RIGHT
  // REPORT

  const board = [
  "0,0","0,1","0,2", "0,3", "0,4",
  "1,0","1,1","1,2", "1,3", "1,4",
  "2,0","2,1","2,2", "2,3", "2,4",
  "3,0","3,1","3,2", "3,3", "3,4",
  "4,0","4,1","4,2", "4,3", "4,4"];

  const location = ["NORTH", "SOUTH", "EAST", "WEST"];
  const step = ["MOVE", "LEFT", "RIGHT"];

  app.log.info('Welcome to Pacman! \r\n Move Pacman on the board by entering a command:\r\n PLACE X,Y,F');

  app.prompt.get('placement', function (err, result) {
    //validation of placement entry
    var positionArray = result.placement.split(/[,\s]+|[,\s]+/g);
    positionArray.map(function(x){ return x.toUpperCase() });
    var place = positionArray[0]
    var xyPosition = positionArray[1]+","+positionArray[2]
    var locationPosition = positionArray[3]

      //validate correct placements
      if ( place === "PLACE" && board.includes(xyPosition) && location.includes(locationPosition)) {
        app.log.info("correct");

        moveWhere(place, xyPosition, locationPosition)

      } else {
        error(place, xy, location)
      }
  });



  function error(place, xy, location) {
     app.log.info("Please enter a valid move, e.g. PLACE 0,0,NORTH \r\n"+place+" "+xy+" "+location+"does not apply.");
  };

  function moveWhere(place, xyPosition, locationPosition) {
    app.prompt.get('move', function(err, moveWhere){
      if (step.includes(move.moveWhere)) {
        app.log.info(move.moveWhere)
      } else {
        app.log.info ("incorrect move")
      }
    });
  }

});

app.start();
