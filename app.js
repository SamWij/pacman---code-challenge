var flatiron = require('flatiron'),
    app = flatiron.app;

app.use(flatiron.plugins.cli, {
  dir: __dirname,
  usage: [
    'hello - say hello to somebody.'
  ]
});

app.cmd('pacman', function () {
  const board = [
  "0,0","0,1","0,2", "0,3", "0,4",
  "1,0","1,1","1,2", "1,3", "1,4",
  "2,0","2,1","2,2", "2,3", "2,4",
  "3,0","3,1","3,2", "3,3", "3,4",
  "4,0","4,1","4,2", "4,3", "4,4"]

  app.log.info('Welcome to Pacman!  Please Place Pacman on the board by entering a command: PLACE X,Y,F');



  app.prompt.get('ENTER ', function (err, result) {
    app.log.info('hello '+result.name+'!');
  })
})

app.start();
