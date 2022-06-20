const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "Name is required!"],
        minlength: [3, "Name must be at least 3 characters long"]},
    email: {
        type: String,
        required:[true, "Email is required!"],
        minlength: [3, "Email must be at least 3 characters long"]},
    comment: {
        type: String,
        required:[true, "Comment is required!"],
        minlength: [3, "Comment must be at least 3 characters long"]}

})

//register the above code at a table in mongodb
const Comment = mongoose.model("Comment", CommentSchema )

module.exports = Comment;