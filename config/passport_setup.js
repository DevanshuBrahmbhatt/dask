const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const conn=require('./database');



passport.serializeUser((user, done) => {

    done(null, user.id);
  
});

passport.deserializeUser((id,done)=>{

    
    conn.query('SELECT * FROM profile WHERE google_id=?',id,(err,user)=>{
    //    console.log(id);
       done(null,user);
    });

});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL:  "/auth/google/redirect"

    },  (accessToken, refreshToken, profile, done) => {


        // passport callback function
        console.log('passport callback function fired:');

        
         var name =profile._json.name;
         var id=profile.id;
         var picture=profile._json.picture;
         
     


        conn.query("select * from profile where google_id=?",id,(err,response,meta)=>{

                if(response[0]){

                    console.log("aready exists");
                    done(null, response[0]);
                    

                }

                else if(err){

                    console.log(err);
                }


                else{


                    conn.query("Insert into profile (name,google_id,picture)  values(?,?,?)",[name,id,picture],(err,result)=>{

                            if(err){
                                console.log(err);
                            }
                            else{
                                // console.log(result);
                                done(null, {"name":name,"google_id":id,"picture":picture});
                                                          
                            }

                    });
                }


        });


    })
)

