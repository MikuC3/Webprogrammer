const express = require("express");
const app = express();
const port = 3001;

app.get("/",(req,res) =>{
    res.send("RMUTL Express !!!!");
});

app.get("user",(req,res) =>{
    let data = {
        user: "nest",
        email: "nest@nest.nest"
    };

    res.status(200).json(data);
});

app.listen(port,() => {
    console.log(`Express Sever Run at http://localhost:${port}`);

});