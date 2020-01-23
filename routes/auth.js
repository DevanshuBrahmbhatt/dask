const router = require("express").Router();
const passport = require("passport");

//router.use(passport.initialize());

// auth login
router.get("/login", (req, res) => {
  res.render("login", { user: req.user });
});

// auth logout
router.get("/logout", (req, res) => {
  // handle with passport
  res.send("logging out");
});

// auth with google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"]
  })
);

// callback route for google to redirect to
router.get("/google/redirect/", passport.authenticate("google"), (req, res) => {

  // console.log(req.params.id);
  // res.send(user);
res.render("index");
//  console.log(req.user);

});
  console.log("getting index");




  
  //res.redirect('index.ejs');

module.exports = router;
