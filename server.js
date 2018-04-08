var connectionString =
  'postgres://' +
  config.postgres.user +
  ':' +
  config.postgres.password +
  '@' +
  config.postgres.host +
  '/' +
  config.postgres.db;
var massiveInstance = massive.connectSync({
  connectionString: connectionString
});
var db;
var pgClient = new pg.Client(connectionString);
pgClient.connect();
pgClient.query('LISTEN "changes"');
pgClient.on('notification', function(data) {
  console.log('_____________________');
  console.log('Change notification');
  io.emit('change');
});
