const mysql = require('mysql');
const fs = require('fs'); // Node.js built-in module for file system operations

// Read the root certificate file
const ca = fs.readFileSync('./SSL certificate/DigiCertGlobalRootCA.crt.pem');

// Create a connection to the MySQL database with SSL options
const connection = mysql.createConnection({
  host: 'asaani.mysql.database.azure.com',
  user: 'Kaif',
  password: 'password',
  database: 'asaani',
  ssl: {
    ca: ca
  }
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId);
});
connection.query('SELECT * FROM users', (error, results, ) => {
  if (error) throw error;
  else{
    console.log('Query result:', results);

  }
});



// Perform database operations...


