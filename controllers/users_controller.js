const User = require('../models/users');
// const Users = require('../models/users')


module.exports.profile = function(req,res){
    res.end('<h1>User Profile</h1>');
}

// render the Sign Up page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title: 'connectBuzz | Signup'
    });
}

// render the Sign In page
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title : 'connectBuzz | SignIn'
    });
}


// get the sign up data
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err,user){
        if(err){
            console.log("error in finding user in signing up.");
            return;
        }
        if(!user){
            User.create(req.body, function(err,user){
                if(err){
                    console.log("error in signing up the user");
                return;
                }
                res.redirect('/users/sign-in');
            })
        }
        else{
            res.redirect('back');
        }
    })


}
// Sign in and create session for the user
module.exports.createSession = function(req,res){

}