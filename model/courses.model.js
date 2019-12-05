const mongoose = require("mongoose");

var CourseSchema = new mongoose.Schema({
    courseName : {
        type: String,
        required : "Required"
    },
    curseId : {
        type : String,
    },
    courseDuration : {
        type : String,
    },
    courseFee : {
        type : String,
    }

});

mongoose.model("course", CourseSchema)