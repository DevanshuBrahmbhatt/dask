
const router = require("express").Router();
const passport = require("passport");
const conn=require('../config/database');



router.get('/' ,(req, res) => {


    var personobj={};

    passport.deserializeUser((id,done)=>{

    
        conn.query('SELECT * FROM profile WHERE google_id=?',id,(err,user)=>{
           console.log(user);
           done(null,user);
        });
    
    });
    

// console.log(de);

console.log("here pro");
    
conn.query('SELECT * FROM profile where google_id=?',userId, (err, result) => {
    
    console.log(conn.query);

    if(err){

        console.log(err);
    }

    else{

        personobj={print:result};
         res.render("profile");
        
    }
});


   
});



module.exports = router;