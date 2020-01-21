
const router = require("express").Router();
const express = require('express');
const passport = require("passport");
const conn=require('../config/database');
const app = express();

router.get('/', (req, res) => {


res.render("askquestion");

app.post('/submit',(req,res)=>{


    let post={question:`${req.body.question}` };
    let sql='INSERT INTO questions set ?';
    let query=conn.query(sql,post,(err,result)=>{
    
            if(err){}
            console.log(result);
            res.send("inserted");
    
        });
    
    




});
    
    

   });



module.exports = router;