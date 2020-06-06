const router = require('express').Router();
const express = require('express');
const passport = require('passport');
const conn = require('../config/database');
const app = express();

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
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
  var userId = localStorage.getItem('userId');

  conn.query(
    'SELECT * FROM PROFILE where google_id=?',
    userId,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result[0].p_id);

      if (typeof localStorage === 'undefined' || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
      }

      localStorage.setItem('p_id', result[0].p_id);
    }
  );

  res.render('askquestion');
});

router.post('/add', (req, res) => {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
  var p_id = localStorage.getItem('p_id');

  var post = {
    question: req.body.question,
    p_id: p_id,
    // d_id:req.body.d_id
  };

  // let post={question:`${req.body.question}` };
  let sql = 'INSERT INTO questions set ?';
  let query = conn.query(sql, post, (err, result) => {
    if (err) {
      console.log(err);
      res.send('error');
    } else {
      console.log(result);
      // res.send("inserted");
      res.render('index');
    }

    res.send('Nothing work');
  });
});

module.exports = router;
