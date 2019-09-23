const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("Välkommen till T4yra Måns");
});


const port = process.env.port || 5000;
app.listen(port, ()=>console.log("lyssnar på port 5000"));