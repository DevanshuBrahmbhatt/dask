
const router = require("express").Router();
const express = require('express');
const passport = require("passport");
const conn=require('../config/database');
const app = express();






function isAuth(req,res,next){

    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
    var userId=localStorage.getItem('userId');
    if(userId){

        return next();
    }
    else{

        res.redirect('/auth/google');
       
    }



}






router.get('/:id',isAuth,(req,res)=>{

var q_id= req.params.id;
console.log(q_id);

conn.query('select * from questions where q_id=?',q_id,(err,result)=>{

        
    res.render("answer",{data:result});


});



});



router.get('/view/:id',(req,res)=>{

    var q_id= req.params.id;
    console.log(q_id);
    
    conn.query('SELECT * from answers INNER JOIN questions on answers.q_id=questions.q_id INNER JOIN profile on questions.p_id=profile.p_id where authenticate=1 and q_id=?',q_id,(err,result)=>{
    
            
        res.render("question",{data:result});
    
    
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