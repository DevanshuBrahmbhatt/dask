
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


    var sql= "SELECT * FROM questions INNER JOIN profile on questions.p_id=profile.p_id  WHERE questions.q_id=? ; SELECT * FROM answers INNER JOIN questions on answers.q_id=questions.q_id INNER JOIN profile on profile.p_id=questions.p_id WHERE answers.authenticate=1 AND answers.q_id=?  ";
    // var sql="SELECT * FROM answers INNER JOIN questions on answers.q_id=questions.q_id INNER JOIN profile on profile.p_id=questions.p_id WHERE answers.authenticate=1 and answers.q_id=? ";
   
    
        conn.query(sql,[q_id,q_id],(err,result)=>{
    
        console.log(sql);
        if(err){


            console.log(err);
        }else{
        res.render("question",{data:result[0],data1:result[1]});
       
         }
    
 });
    
    
    
    });
    

router.post('/add/:id',(req,res)=>{

    var post = {
        answer: req.body.answer,
        q_id: req.params.id

        
    }


let sql='INSERT INTO answers set ?';
let query=conn.query(sql,post,(err,result)=>{

        if(err){
            
            console.log(err);
            res.send("error");
        
        }
        else{
        console.log(result);
        // res.send("inserted");
        res.render("index");

        }

        res.send("Nothing work");



    });



});




    
    

   



module.exports = router;