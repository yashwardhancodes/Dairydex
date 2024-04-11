const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const feedback=require("./models/file.js");


app.use(express.urlencoded({ extended: true }));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname,"public")));
app.use("/public",express.static('public'));

main().then(()=>{
    console.log("connection successfull");
}).catch((err)=>{
    console.log(err);
})
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/feedback');}

// const feedback1= new feedback({
//     name:"yash",
//     emailId:"yashsingar2=",
//     msg:"I m fine",
//     contactNo:78372893,
// })

// feedback1.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});


//save feedback route
app.post("/submit",(req,res)=>{
    let {name,email,number,message}=req.body;

    const feedback1=new feedback({
        name:name,
        emailId:email,
        contactNo:number,
        msg:message,
    })

    feedback1.save().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
    res.send("your feedback was submitted successfully");
})

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


