
const router = require("express").Router();
const passport = require("passport");
const conn=require('../config/database');



router.get('/', (req, res) => {

// console.log(profile);

    console.log("getting req");
    // console.log(req.id);

   // req.json(Profile);
    // console.log( req.json(profile));


    // id=req.body.id;

    
  
    var personobj={};

console.log("here pro");
    
conn.query('SELECT * FROM profile where google_id=?',req.id, (err, result) => {
    
    console.log(conn.query);

    if(err){

        console.log(err);
    }

    else{

        personobj={print:result};
        // console.log(personobj);
         res.render("profile");
        
    }
});


   
});



module.exports = router;