const express=require("express");
const path= require("path"); 
const hbs=require('hbs');
const app=express();
const port=4000;

//public static path

const static_path=path.join(__dirname,"../public");

app.set('view engine','hbs');


app.use(express.static(static_path));



//routing
app.get("",function(req,res){
    res.render('index');
})
app.get("/about",function(req,res){
    res.render('about');
})

app.get("/weather",function(req,res){
    res.render('weather');
})

app.get("/error",function(req,res){
    res.render('404error');
})


app.listen(port,function(res){
    console.log(`listening to port as ${port}`)
})