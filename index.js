const express=require("express");
const app=express();
const path=require("path");
 app.set("view engine","ejs");
 app.set("views",path.join(__dirname,"/views"));
 

app.get("/" , (req,res)=>{
res.render("home.ejs");
});


app.get("/ig/:username", (req,res)=>{
    const insta=require("./data.json");
    let {username}=req.params;
    const data=insta[username];
    console.log(data);
    res.render("instagram.ejs", {data});
});




 const port=8080;
 app.listen(port, ()=>{
console.log("im listening");
 }
);


