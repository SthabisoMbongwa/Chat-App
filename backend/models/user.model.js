import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        ruquired:true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
        minlengthe:6,
    },
    gender:{
        type: String,
        ruquired: true,
        enum: ["male", "female"],
    },
    profilePic: {
        type: String,
        default: "",
    },
});

const User = mongoose.model("User", userSchema);