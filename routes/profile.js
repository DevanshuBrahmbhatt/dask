
const router = require("express").Router();
const passport = require("passport");
const conn=require('../config/database');



router.get('/' ,(req, res) => {


         if (typeof localStorage === "undefined" || localStorage === null) {
            var LocalStorage = require('node-localstorage').LocalStorage;
            localStorage = new LocalStorage('./scratch');
          }


           
          console.log(localStorage.getItem('userId'));
          var userId=localStorage.getItem('userId');





console.log("here pro");
    
conn.query('SELECT * FROM profile where google_id=?',userId, (err, result) => {
    
    console.log(conn.query);

    if(err){

        console.log(err);
    }

    else{

        console.log(result);
         res.render("profile",{data:result});
        
    }
});


   
});



module.exports = router;