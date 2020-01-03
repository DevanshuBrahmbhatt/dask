
const router = require("express").Router();
const passport = require("passport");
const conn=require('../config/database');



          //Profile  passport_setup vadi ahiya joiea 6iea.


    var personobj={};

console.log("here pro");
    
conn.query("SELECT * FROM profile where google_id=?",id, (err, result) => {
    
    console.log(conn.query);
    if(err){

        console.log(err);
    }

    else{

        personobj={print:result};
        console.log(personobj);
    //    res.render("profile");
        
    }
});




module.exports = router;