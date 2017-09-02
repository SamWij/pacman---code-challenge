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
  const position  = [];

  app.log.info('Welcome to Pacman! \r\n Move Pacman on the board by entering a command:\r\n PLACE X,Y,F');

  app.prompt.get('move', function (err, result) {

    var nameList = result.move.split(/[,\s]+|[,\s]+/g);

      app.log.info(nameList);
    // if (result.command === "END") {
    //   app.log.info("you entered END");
    // }
  })
})




app.start();
