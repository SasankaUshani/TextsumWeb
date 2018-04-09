



// var cn = {
//     host: 'localhost', // server name or IP address;
//     port: 5000,
//     database: 'Test',
//     user: 'postgres',
//     password: '9080'
// };
const { Client } = require('pg')

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'Test',
//   password: '9080',
//   port: 5000,
// })

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'Test',
  password: '9080',
  port: 5000,
})
client.connect()

const query = {
  // give the query a unique name
  text: 'SELECT * from SUMMERIZEDNEWS',
 
}
client.query(query, (err, res) => {
  if (err) {
    console.log("*****failed*****")
    console.log(err.stack)
  } else {
    console.log("*****success*****")
    console.log(res.rows[0])
  }
})


var http = require("http");

http.createServer(function (request, response) {
  
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);

console.log("http===============")

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
