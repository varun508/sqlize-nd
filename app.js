const appConfig = require('./config');
const handlebars = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const db = require('./dbHelper');

db.authenticate().then(() => console.log("Connected to the database")).catch(err => console.log(err));

app.get("/", (req, res) => res.send("Index"));

app.listen(appConfig.PORT, () => {
    console.log("Listening on port 3000...");
})