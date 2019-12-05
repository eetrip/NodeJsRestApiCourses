
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Eeshan", { useNewUrlParser: true }, (error)=>{
    if(!error)
{
    console.log("success");
}
else
{
    console.log("connection error");
}
});

const Course = require("./course.model");