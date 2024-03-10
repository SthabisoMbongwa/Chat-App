import User from "../models/user.model";

export const signup = async (req, res) => {
    try{
        const {fullName, username, password, confirmPassword, gender, status, profileMessage} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error: "Password don't match"})
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({error: "Username already exists"})
        }

                
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic =`https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        await newUser.save();

        res.status(201);
       
    } catch (error){

    }
};



export const login = (req, res) => {
    console.log("loginUser");
};

export const logout = (req, res) => {
    console.log("logoutUser");
};


