
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



router.get('/',isAuth,(req,res)=>{


res.render('askquestion');

});




router.post('/add', isAuth,(req, res) => {

 
        var post = {
            question: req.body.question,
            p_id:4,
            
        }


    // let post={question:`${req.body.question}` };
    let sql='INSERT INTO questions set ?';
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