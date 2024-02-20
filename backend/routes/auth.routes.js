import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
    res.send("Login Route");
});

router.get("/login", (req, res) => {
    res.send("Login Route");
});

router.get('/logout', (req, res) => {
    res.send("You have registered successfully");
})

export default router;