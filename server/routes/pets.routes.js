const PetController = require("../controllers/pets.controller");
const multer = require("multer");
const {v4: uuidv4} = require("uuid");
let path = require('path');


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false)
    }
    
}

let upload = multer({ storage, fileFilter });
console.log(upload);

module.exports = app => {
    app.get("/api/pets", PetController.findAllPets);
    app.post("/api/pets/new", upload.single('photo'), PetController.createNewPet);
    app.get("/api/pets/:id", PetController.findOnePet);
    app.put("/api/pets/update/:id", PetController.updateExistingPet);
    app.delete("/api/pets/delete/:id", PetController.deletePet);

}