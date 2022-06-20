const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:[true, "This field is required!"],
        minlength: [3, "Name must be at least 3 characters long"]},
    lastName: {
        type: String,
        required:[true, "This field is required!"],
        minlength: [3, "Name must be at least 3 characters long"]},
    email: {
        type: String,
        required:[true, "This field is required!"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }},
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
        }
        }, {timestamps: true});
    
    //creating the virtual field for confirm password
UserSchema.virtual('confirm')
.get( () => this.confirm )
.set( value => this.confirm = value );

//use the virtual field for confirm password to make sure it matches up with password--> we are adding a validation for the confirm password virtual field
UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirm) {
        this.invalidate('confirm', 'Password must match confirm password');
    }
    next();
    });

//before saving the user to the db, we will hash their password using bcrypt
UserSchema.pre("save", function(next){
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        })
        .catch(err=>{
            console.log(err)
            next();
        })
})



//register the above code at a table in mongodb
const User = mongoose.model("User", UserSchema )

module.exports = User;