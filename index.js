const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const { v4: uuidv4 } = require('uuid');


app.use(express.urlencoded({ extended: true }));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname,"public")));
app.use("/public",express.static('public'));



app.get("/",(req,res)=>{
    const currentPage='home';
  res.render("index.ejs",{currentPage});
});

app.get("/aboutus",(req,res)=>{
    const currentPage='aboutus';
    res.render("aboutus.ejs",{currentPage});
});

app.get("/business",(req,res)=>{
    const currentPage='business';
    res.render("business.ejs",{currentPage});
});

app.get("/products",(req,res)=>{
    const currentPage='products';
    res.render("products.ejs",{currentPage});
});
app.listen(port,()=>{
    console.log("listening to the port :8080");
});


