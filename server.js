const express = require("express");

const app = express();

app.get('/', (req, res) =>{
    res.send("<h1>This is the home page.</h1>");
});
app.get('/contact', (req, res) =>{
    res.send("<h3>Contact me at sahilsemwal16@gmail.com</h3>")
}

app.listen(3000, () =>{
    console.log("Server started!");
});
