const express = require("express");
const app = express();

const userRoute = require('./routes/userRoutes')

const bodyParser = require("body-parser");
const mysql = require("mysql2");
app.use(bodyParser.json());


app.use('/signIn',userRoute)

var mySqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "senghong",
  database: "crud_node",
  insecureAuth: true,
  multipleStatements: true,
});
mySqlConnection.connect((err) => {
  if (!err) console.log("Connection Established Successfully");
  else console.log("Connection Failed!" + JSON.stringify(err, undefined, 2));
});

app.get("/api", (req, res) => {
  res.json({ users: ["user1", "user2", "user3", "user fore"] });
});

app.get("/user", (req, res) => {
  mySqlConnection.query(
    "SELECT * FROM crud_user ",
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});
app.delete("/user/:id", (req, res) => {
  mySqlConnection.query(
    "DELETE FROM crud_user WHERE id = ?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send("Learner Record deleted successfully.");
      else console.log(err);
    }
  );
});


app.post('/user', (req, res)=>{
  // mySqlConnection.query("INSERT INTO crud_user)")
})
// app.post('/add', (req, res)=>{
//     let user = req.body;
//     var sql = "SET @id= ?; SET @name= ?; SET @email= ? ; SET @contact = ? "
// })

app.listen(5000, () => console.log("Server start on path 5000!"));
