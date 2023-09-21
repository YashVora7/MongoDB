const express = require("express");
const connect = require("./db");
const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send(req.body)
 });

 app.listen(8090, () => {
    connect()
    console.log("Server Started");
 })