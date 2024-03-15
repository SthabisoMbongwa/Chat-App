export const sendMessage = async (req, res) => {
    try{
        const {message} = req.body;
        const { id: receiverId } = req.params;   //or const id = req.params.id
        const senderId = req.user._id

        await Conversation.findOne({
            participants: {$all: [senderId, receiverId] },
        })
    }catch(error){
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({error: "Internal server error"});
    }
};