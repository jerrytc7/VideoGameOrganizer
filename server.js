const express = require("express");
const jsonServer = require("json-server");
const jsonRouter = jsonServer.router("db.json");
const path = require("path");

const app = express();

const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, "build")));
app.use(jsonRouter);

app.listen(PORT);