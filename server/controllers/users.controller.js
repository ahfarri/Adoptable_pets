const User = require("../models/users.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const {secret} = require("../config/jwt");
const res = require("express/lib/response");



module.exports.register=(req, res)=>{
    const user = new User(req.body);
    user.save()
        .then(()=>{
            res
                .cookie("usertoken", jwt.sign({_id:user._id}, secret), {httpOnly: true})
                .json({msg: "success", user: user})

        })
        .catch(err=> res.json(err))
}

module.exports.login=(req,res)=>{
    User.findOne({email:req.body.email})
        .then(user => {
            if(user == null){
                res.json({msg: "Invalid login attempt"}) //email is not found
            }else{
                bcrypt.compare(req.body.password, user.password)
                    .then(passwordIsValid=>{
                        if(passwordIsValid){
                            res.cookie("usertoken", jwt.sign({_id: user._id}, secret), {httpOnly:true})
                                .json({msg: "success!"});
                        }else{
                            res.json({msg: "Invalid login attempt"}) //incorrect password
                        }
                    })
                    .catch(err => res.json({msg: "Invalid login attempt", err}))
            }
        })
        .catch(err=> res.json(err))
}


module.exports.getLoggedInUser=(req,res)=>{
    const decodedJWT = jwt.decode(req.cookies.usertoken, {complete:true});
    User.findById(decodedJWT.payload._id)
        .then(user=> res.json(user))
        .catch(err=> res.json(err))

}

module.exports.logout=(req, res)=>{
    console.log("logging out")
    res.cookie("usertoken", '', {maxAge: 1000});
}