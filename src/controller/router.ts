import  express  from "express";
const router = express.Router();

router.get("/home", (req, res) => {
    res.render("home");
});

router.post("/home", (req, res) => {
    res.render("show", { content: req.body.content });
})


export default router;