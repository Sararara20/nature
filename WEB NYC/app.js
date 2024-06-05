const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Koneksi ke MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'properti'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint untuk menangani permintaan POST dari formulir saran
app.post('/submit-feedback', (req, res) => {
  const { nama, email, komentar } = req.body;

  const query = 'INSERT INTO feedback (nama, email, komentar) VALUES (?, ?, ?)';
  connection.query(query, [nama, email, komentar], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    console.log('Data berhasil disimpan');
    res.send('Terima kasih! Komentar Anda telah diterima.');
  });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
