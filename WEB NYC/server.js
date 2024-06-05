const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db'); // Improt modul koneksi database

const app = express();
const port = 3000;

// Gunakan middleware bodyParser untuk mengurai body permintaan
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint untuk menangani permintaan POST dari formulir
app.post('/submit-feedback', (req, res) => {
    const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // Ganti dengan host MySQL Anda
  user: 'root', // Ganti dengan username MySQL Anda
  password: '', // Ganti dengan password MySQL Anda
  database: 'properti' // Ganti dengan nama database MySQL Anda
});

// Membuka koneksi ke database
connection.connect((err) => {
  if (err) {
    console.error('Koneksi ke database gagal: ', err);
    return;
  }
  console.log('Koneksi ke database berhasil');
});
  // Gunakan koneksi database 'connection' di sini untuk menyimpan data ke database
  // Anda dapat menulis kueri SQL di sini untuk menyimpan data dari req.body ke dalam tabel di database
 // Mendapatkan data dari body permintaan
 const { nama, email, comment } = req.body;

 // Kueri SQL untuk memasukkan saran ke dalam tabel feedback
 const sql = 'INSERT INTO feedback (nama, email, comment) VALUES (?, ?, ?)';

 // Eksekusi kueri SQL dengan menggunakan data parameter
 connection.query(sql, [nama, email, comment], (err, result) => {
   if (err) {
     console.error('Gagal memasukkan saran ke dalam database: ', err);
     res.status(500).send('Gagal memasukkan saran ke dalam database');
     return;
   }
   console.log('Saran berhasil dimasukkan ke dalam database');
   res.status(200).send('Terima kasih! Komentar Anda telah diterima.');
 });
});

// Mulai server Anda
app.listen(port, () => {
 console.log(`Server berjalan di http://localhost:${port}`);
});

// Mematikan koneksi ke database
//connection.end((err) => {
  //  if (err) {
    //  console.error('Error saat mematikan koneksi: ', err);
      //return;
    //}
    //console.log('Koneksi ke database telah dimatikan');
  //});
