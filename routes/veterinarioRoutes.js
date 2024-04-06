import express from 'express';
const router = express.Router();

router.get('/', (req, res) => { 
    res.send("From API/VETERINARIOS");
});

router.get("/login", (req, res) => { 
    res.send("From API/VETERINARIOS/LOGIN");
});


export default router;
