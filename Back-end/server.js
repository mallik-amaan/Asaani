const express = require('express');
const app = express();
const PORT = 8081;
const bodyParser = require('body-parser');
const mysql = require('mysql');
const fs = require('fs');
const cors = require('cors');
app.use(cors())

// Environment variables are recommended for sensitive data (credentials)

const ca = fs.readFileSync('./SSL certificate/DigiCertGlobalRootCA.crt.pem');

const connection = mysql.createConnection({
  host: 'asaani.mysql.database.azure.com',
  user: 'Ahad',
  password: 'pa2PX@eKutMA83A',
  database: 'asaani',
  ssl: {
    ca: ca
  }
});

app.use(bodyParser.json());

// Check if the database is connected successfully or not
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err.stack);
    return;
  }
  console.log('Connected to MySQL database as id', connection.threadId);
});

//-----------signUp--------------

app.post('/signup', async (req, res) => {
  const sql = "INSERT INTO users (`username`, `password`, `email`, `phone_number`, `fname`, `lname`, `address`, `user_type`, `cnic`) VALUES (?)";
  const values = [req.body.formData.username, req.body.formData.password, req.body.formData.email, req.body.formData.phone_number, req.body.formData.fname, req.body.formData.lname, req.body.formData.address, req.body.formData.user_type, req.body.formData.cnic];
  console.log(values);
  connection.query(sql, [values], (error, result) => {
    if (error) return res.json(error);
    console.log(result);
    return res.json(result);
  });
});
//-----------signUp--------------

//-----------login--------------

app.post('/login',  (req, res) => {
  const sql2 = "SELECT username,password FROM users WHERE username = ? AND password = ?";
  const values2 = [req.body.formData.username, req.body.formData.password];
  connection.query(sql2, values2, (error, result) => {
    if (error) return res.json(error);
    console.log(result);
    return res.json(result);
  });
});

//---------> fo order now----------------
app.get('/services', (req, res) => {
  const query = 'SELECT * FROM services';
  // Perform query
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }  
    res.json(results);
    console.log('Services sent to front end');
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
