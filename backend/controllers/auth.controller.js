
export const signup = async (req, res) => {
    try{
        const {fullName, username, password, confirmPassword, gender} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error: "Password don't match"})
        }
    } catch (error){

    }
};

export const login = (req, res) => {
    console.log("loginUser");
};

export const logout = (req, res) => {
    console.log("logoutUser");
};


