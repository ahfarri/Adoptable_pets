const Pet = require("../models/pets.models");



module.exports.findAllPets = (req,res)=>{
    Pet.find()
        .then(allPets=>{

            function SortArray(x, y){
                return x.type.localeCompare(y.type);
            }
            const sortedPets = allPets.sort(SortArray);
            res.json({results: sortedPets})
        })
        .catch(err=>{
            res.json({err:err})
        })
}


module.exports.createNewPet = (req,res)=>{
    const name = req.body.name;
    const type= req.body.type;
    const description = req.body.description;
    const skill1 = req.body.skill1;
    const skill2 = req.body.skill2;
    const skill3 = req.body.skill3


    let photo=null;
    if(req.file){
        console.log("you uploaded a file!!!")
        photo = req.file.filename;
    }else{
        console.log("NO FILE DETECTED")
    }
    const newPetData = {
        name,
        type,
        description,
        skill1,
        skill2,
        skill3,
        photo: photo
    }

    Pet.create(newPetData)
        .then(newPetObj=>{
            res.json({results: newPetObj })
        })
        .catch(err=>{
            res.json({err:err})
        })
}

module.exports.findOnePet = (req,res)=>{
    Pet.findOne({_id:req.params.id})
        .then(foundPet=>{
            res.json({results: foundPet })
        })
        .catch(err=>{
            res.json({err:err})
        })
}


module.exports.updateExistingPet = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params.id }, //find the objects whose _id == req.params.id
        req.body, //req.body is the information from the form to update with
        { new: true, runValidators: true } //new:true means return the newly updated info. 
    )
        .then(updatedPet => {
            res.json({ results: updatedPet })
        })
        .catch(err=>{
            res.json({err:err})
        })
        
}

module.exports.deletePet = (req,res)=>{
    Pet.deleteOne({_id: req.params.id})
        .then(deletedPet =>{
            res.json({results: deletedPet})
        })
        .catch(err=>{
            res.json({err:err})
        })
}