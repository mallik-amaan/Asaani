const express = require('express');
const app = express();
const PORT = 5000;
app.use(bodyParser.json());

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

app.post('/signup', (req, res) => {
  const { fname, lname, password, phone, email, cnic } = req.body;

  console.log('Received request body:', req.body);
  console.log('Password:', password);


  // Concatenate fname and lname to form the username
  const username = `${fname}_${lname}`;

  // Insert the signup data into the database
  const query = `
    INSERT INTO users 
    (username, password, email, phone_number, fname, lname, address, user_type, user_id) 
    VALUES (?, ?, ?, ?, ?, ?, NULL, NULL, NULL)
  `;

  connection.query(query, [username, password, email, phone, fname, lname], (error, results) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      console.log('User signed up successfully');
      res.status(200).json({ message: 'Signup successful' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Export connection object for use in other parts of the application
module.exports = { connection };
