const express = require('express');
const router = express.Router();
const path = require("path")

const moviesRoutes = require("./moviesController");
router.use("/api/movies",moviesRoutes)

const reviewsRoutes = require("./reviewsController");
router.use("/api/reviews",reviewsRoutes)

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/index.html"))
})

module.exports = router;