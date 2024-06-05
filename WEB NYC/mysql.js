var mysql = require ('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "properti"
})

con.connect(function(err){
    if (err) throw err;
    console.log("koneksi berhasil");

});