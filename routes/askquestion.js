
const router = require("express").Router();
const express = require('express');
const passport = require("passport");
const conn=require('../config/database');
const app = express();


router.get('/',(req,res)=>{


res.render('askquestion');

});




router.post('/add', (req, res) => {

 
        var post = {
            question: req.body.question,
            
        }


    // let post={question:`${req.body.question}` };
    let sql='INSERT INTO test set ?';
    let query=conn.query(sql,post,(err,result)=>{
    
            if(err){
                
                console.log(err);
                res.send("error");
            
            }
            else{
            console.log(result);
            res.send("inserted");
            res.redirect("index");

            }

            res.send("Nothing work");


    
        });
    
    




});
    
    

   



module.exports = router;