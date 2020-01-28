
const router = require("express").Router();
const passport = require("passport");
const conn=require('../config/database');

router.get('/', (req, res) => {

conn.query('SELECT * FROM questions INNER JOIN profile on questions.p_id=profile.p_id  where authenticate=1',(err,result)=>{



    
    // console.log(conn.query);


    if(err){

        console.log(err);
    }

    else{
        // console.log(result);
         res.render("questions",{data:result});
        
    }

});
   
   
   
   
   
   
   
   
});



module.exports = router;