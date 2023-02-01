const express = require('express');
const router = express.Router();
const db = require("../config/connection")

router.get("/",(req,res)=>{
    db.query("SELECT * FROM movies",(err,data)=>{
        if(err){
            console.log(err);
            return res.status(500).json({msg:"error occured",err:err})
        } else {
            res.json(data);
        }
    })
})
router.post("/",(req,res)=>{
    db.query("INSERT INTO movies(title)VALUES(?)",[req.body.title],(err,data)=>{
        if(err){
            console.log(err);
            return res.status(500).json({msg:"error occured",err:err})
        } else {
            res.json(data);
        }
    })
})
router.delete("/:id",(req,res)=>{
    db.query("DELETE FROM movies WHERE id = ?",[req.params.id],(err,data)=>{
        if(err){
            console.log(err);
            return res.status(500).json({msg:"error occured",err:err})
        } else {
            res.json(data);
        }
    })
})

module.exports = router;