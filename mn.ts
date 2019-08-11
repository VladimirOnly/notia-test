const pg = require('pg');

const connectionString = {
  user: 'test',
  host: 'gates.notia.cz',
  database: 'test',
  password: 'anmUtR54oPnh',
  port: 6958,
};

const pool = new pg.Pool(connectionString);

pool.connect(function(err, client, done) {

  const query = client.query(new pg.Query('SELECT * from users'));
  query.on('row', (row) => {
    console.log(row);
  });
  query.on('end', (res) => {
    // pool shutdown
    console.log('ending');
    pool.end();
  });
  query.on('error', (res) => {
    console.log(res);
  });

  done();
  pool.query('INSERT INTO users (id, firstname , lastname , superuser)'
   VALUES (1, David, Muller, true )
    // tslint:disable-next-line:no-shadowed-variable
    (err, res) => {
      console.log(err, res);
      pool.end();
    });
});


