const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mysql = require('mysql');





app.get('/', (req, res) => {
    res.send('Hello from Asaani server');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
