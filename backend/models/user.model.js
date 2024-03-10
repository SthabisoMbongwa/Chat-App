import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
        minlength:6,
    },
    gender:{
        type: String,
        required: true,
        enum: ["male", "female"],
    },
    profilePic: {
        type: String,
        default: "",
    },
    status: {
        type: String,
        required: false,
        default: ""
    },
    profileMessage: {
        type: String,
        required: false,
        default: "Hi, let's talk..."
    },
});

const User = mongoose.model("User", userSchema);

export default User;