
const router = require("express").Router();
const express = require('express');
const passport = require("passport");
const conn=require('../config/database');
const app = express();


router.get('/:id',(req,res)=>{

var q_id= req.params.id;
console.log(q_id);

conn.query('select * from questions where q_id=?',q_id,(err,result)=>{

        
    res.render("answer",{data:result});


});



});


router.post('/add',(req,res)=>{

    var post = {
        answer: req.body.answer,
        q_id:req.body.q_id,
        p_id:req.body.p_id,
        
    }


let sql='INSERT INTO answers set ?';
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