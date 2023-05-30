const { log } = require("console");
const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "student_lab_1",
    password: "1234"
})

connection.connect(function(err){
    if(err){
        return console.error("Ошибка" + err.messange)
    }
    else {
        console.log("подключенире успешно установлено");
    }
})

connection.execute("SELECT * FROM student",
  function(err, results, fields) {
    console.log(err);
    console.log(results); 
    console.log(fields); 
});

const user = ["1", "tomov","Tom","500", 2, "kaluga", "15.05.2000", 10];
const sql = "INSERT INTO student( STUDENT_ID, surname, name, STIPEND, kurs, CITY, BIRTHDAY, UNIV_ID) values(1, 4)";
 
connection.query(sql, user, function(err, results) {
    if(err) console.log(err);
    else console.log("Данные добавлены");
});

// connection.query("SELECT * FROM student")
//           .then(result =>{
//             console.log(result);
//           })
//           .catch(err =>{
//             console.log(err);
//           });





function end() {
connection.end(function(err) {
    if(err){
        return console.log("Ошибка" + err.message)
    }
    else {
        console.log("подключение закрыто");
    }
})}
end()