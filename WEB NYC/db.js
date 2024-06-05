const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Ganti dengan username MySQL Anda
  password: '', // Ganti dengan password MySQL Anda
  database: 'properti' // Ganti dengan nama database Anda
});

connection.connect((err) => {
  if (err) {
    console.error('Koneksi ke database gagal: ', err);
    return;
  }
  console.log('Koneksi ke database berhasil');
});

module.exports = connection;
