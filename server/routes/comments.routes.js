const CommController = require("../controllers/comments.controller");


module.exports = app => {
    app.get("/api/comments", CommController.findAllComments);
    app.post("/api/comments/new", CommController.createNewComment);
    app.get("/api/comments/:id", CommController.findOneComment);
    app.put("/api/comments/update/:id", CommController.updateExistingComment);
    app.delete("/api/comments/delete/:id", CommController.deleteComment);

}