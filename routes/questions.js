
const router = require("express").Router();
const passport = require("passport");
const conn=require('../config/database');

router.get('/', (req, res) => {

conn.query('select * from questions where authenticate=1',(err,result)=>{



    
    console.log(conn.query);


    if(err){

        console.log(err);
    }

    else{
        console.log(result);
         res.render("questions");
        
    }

});
   
   
   
   
   
   
   
   
});



module.exports = router;