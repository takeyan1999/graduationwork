const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const mysql = require("mysql2");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "db_quizapp",
});

connection.connect((error) => {
    if (error) throw error;
    console.log("Successfully connected to MySQL! ");
});

app.get("/quizlist", (req, res) => {
    const selectQuery = `SELECT * FROM quizlist`;
    connection.query(selectQuery, (error, result) => {
        if (error) throw error;
        res.json(result);
    });
});

app.post("/quizlist", (req, res) => {
    const { Quiz, Choice1, Choice2, Choice3, Choice4, AnswerChoice } = req.body;
    const insertQuery = `
    INSERT INTO quizlist (id, Quiz, Choice1, Choice2,Choice3,Choice4,AnswerChoice) VALUES
    (null, '${Quiz}', '${Choice1}', '${Choice2}', '${Choice3}', '${Choice4}', ${AnswerChoice})
  `;
    connection.query(insertQuery, (error) => {
        if (error) throw error;
        res.end();
    });
});

app.put("/quizlist/:id", (req, res) => {
    const requestId = Number(req.params.id);
    const { Quiz, Choice1, Choice2, Choice3, Choice4, AnswerChoice } = req.body;
    const updateQuery = `
    UPDATE quizlist
    SET    Quiz='${Quiz}',
           Choice1='${Choice1}',
           Choice2='${Choice2}',
           Choice3='${Choice3}',
           Choice4='${Choice4}',
           AnswerChoice='${AnswerChoice}'
    WHERE  id=${requestId}
  `;
    connection.query(updateQuery, (error) => {
        if (error) throw error;
        res.end();
    });
});

app.delete("/quizlist/:id", (req, res) => {
    const requestId = Number(req.params.id);
    const deleteQuery = `
    DELETE
    FROM   quizlist
    WHERE  id=${requestId}
  `;
    connection.query(deleteQuery, (error) => {
        if (error) throw error;
        res.end();
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
