
const router = require("express").Router();
const passport = require("passport");


var personobj={};

          

conn.query("SELECT * FROM profile WHERE google_id=? ",profile.id, (err, result) => {
    
    console.log(conn.query);
    if(err){

        console.log(err);
    }

    else{

        personobj={print:result};
        console.log(personobj);
      // res.render('profile',personobj);
        
    }
});

