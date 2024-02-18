import express from "express";

const router = express.Router();

router.get("/login", (req, res) => {
    res.send("Login Route");
});

router.post('/register', (req, res) => {
    res.send("You have registered successfully");
})

export default router;