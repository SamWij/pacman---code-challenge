var flatiron = require('flatiron'),
    app = flatiron.app;

app.use(flatiron.plugins.cli, {
  dir: __dirname,
  usage: [
    'This is a basic flatiron cli application example!',
    '',
    'hello - say hello to somebody.'
  ]
});

app.cmd('pacman', function () {
  app.log.info('Welcome to Pacman!  Please Place Pacman on the board by entering a command: PLACE X,Y,F');

  app.prompt.get('ENTER ', function (err, result) {
    app.log.info('hello '+result.name+'!');
  })
})

app.start();
