const Comment = require("../models/comments.models");

module.exports.findAllComments = (req,res)=>{
    Comment.find()
        .then(allComments=>{
            res.json({results: allComments })
        })
        .catch(err=>{
            res.json({err:err})
        })
}


module.exports.createNewComment = (req,res)=>{
    Comment.create(req.body)
        .then(newCommentObj=>{
            res.json({results: newCommentObj })
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.findOneComment = (req,res)=>{
    Comment.findOne({_id:req.params.id})
        .then(foundComment=>{
            res.json({results: foundComment })
        })
        .catch(err=>{
            res.json({err:err})
        })
}


module.exports.updateExistingComment = (req, res) => {
    Comment.findOneAndUpdate(
        { _id: req.params.id }, //find the objects whose _id == req.params.id
        req.body, //req.body is the information from the form to update with
        { new: true, runValidators: true } //new:true means return the newly updated info. 
    )
        .then(updatedComment => {
            res.json({ results: updatedComment })
        })
        .catch(err=>{
            res.json({err:err})
        })
        
}

module.exports.deleteComment = (req,res)=>{
    Comment.deleteOne({_id: req.params.id})
        .then(deletedComment =>{
            res.json({results: deletedComment})
        })
        .catch(err=>{
            res.json({err:err})
        })
}
