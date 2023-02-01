const express = require('express');
const router = express.Router();
const db = require("../config/connection")

router.get("/",(req,res)=>{
    db.query("SELECT title AS film, body AS review FROM reviews JOIN movies ON movie_id=movies.id",(err,data)=>{
        if(err){
            console.log(err);
            return res.status(500).json({msg:"error occured",err:err})
        } else {
            res.json(data);
        }
    })
})
router.put("/:id",(req,res)=>{
    db.query("UPDATE reviews SET body=? WHERE id=?",[req.body.body,req.params.id],(err,data)=>{
        if(err){
            console.log(err);
            return res.status(500).json({msg:"error occured",err:err})
        } else {
            res.json(data);
        }
    })
})

module.exports = router;
