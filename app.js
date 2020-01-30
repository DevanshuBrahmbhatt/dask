const express = require('express');

const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const path = require('path');
const passport = require('passport');
var session = require("express-session");

const authRoutes = require('./routes/auth');
const profileRoutes=require('./routes/profile');
const questionRoutes=require('./routes/questions');
const askquestionRoutes=require('./routes/askquestion');
const answerRoutes=require('./routes/answer');
const passportSetup = require('./config/passport_setup');
const cs = require('cookie-session')
const conn = require('./config/database');
const app = express();






// const {answer} = require('./routes/index');
 
const port = process.env.PORT||5000;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
// app.use(express.cookieParser());
app.use(fileUpload()); // configure fileupload
app.use(express.json());

app.use(cs({
	maxAge: 24*60*60*1000,
	keys:'abc'
}))

app.use(passport.initialize());
app.use(passport.session());

//app.use(passport.initialize());


app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/questions',questionRoutes);
app.use('/askquestion',askquestionRoutes);
app.use('/answer',answerRoutes);






// // index page 
app.get('/', (req, res) => {

    res.render('index');
});








// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
