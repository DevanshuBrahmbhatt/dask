const router = require('express').Router();
const passport = require('passport');
const conn = require('../config/database');

// function isAuth(req,res,next){

//     var LocalStorage = require('node-localstorage').LocalStorage;
//     localStorage = new LocalStorage('./scratch');
//     var userId=localStorage.getItem('userId');
//     if(userId){

//         return next();
//     }
//     else{

//         res.redirect('/auth/google');

//     }

// }

router.get('/', (req, res) => {
  var userId = localStorage.getItem('userId');

  // console.log("here pro");

  conn.query(
    'SELECT * FROM questions INNER JOIN profile on questions.p_id=profile.p_id  where authenticate=1 and google_id=?',
    userId,
    (err, result) => {
      // console.log(conn.query);

      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.render('profile', { data: result });
      }
    }
  );
});

module.exports = router;
