import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import APP from '../images/apPic.png'

const Newpet = () => {
    const navigate = useNavigate();
    const [petInfo, setPetInfo] = useState({
        name:"",
        type:"",
        description:"",
        skill1:"",
        skill2:"",
        skill3:"",
        photo:""
    })
    const [ValErrors, setValErrors] = useState({});

    const changeHandler = (e)=> {
        setPetInfo({
            ...petInfo,
            [e.target.name]:e.target.value,
        })
        console.log(petInfo)
    };

    const createPet = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', petInfo.name);
        formData.append('type', petInfo.type);
        formData.append('description', petInfo.description);
        formData.append('skill1', petInfo.skill1);
        formData.append('skill2', petInfo.skill2);
        formData.append('skill3', petInfo.skill3);
        formData.append('photo', petInfo.photo);
        console.log(Object.fromEntries(formData));

        axios.post('http://localhost:8000/api/pets/new', formData)
            .then(res=>{
                console.log(res)
                if(res.data.err){ 
                    setValErrors(res.data.err.errors)
                }else{ 
                    navigate("/"); 
                }})
            .catch(err=>console.log(err.response.data))
        setPetInfo({
            name:"",
            type:"",
            description:"",
            skill1:"",
            skill2:"",
            skill3:"",
            photo:""
        })
    };



    const handlePhoto = (e) => {
        setPetInfo({...petInfo, photo: e.target.files[0]});
        console.log(e.target.files[0])
    };

    return (
        <div className="no-r p-3 height font">
        <img src={APP} alt="logo pic" className='imgSize'></img>
        <h4 className='my-4 org'>Know a pet needing a home?</h4>
        <form className="form-w mx-auto" onSubmit={ createPet } encType='multipart/form-data'>
            <div className="mb-3">
                <span className="form-label">Name:</span>
                <input className="form-control brcolor" type="text" name="name" onChange={ (e) => changeHandler(e)  }/>
                <p className="text-danger">{ValErrors.name? ValErrors.name.message: ""}</p>
            </div>
            <div className="mb-3">
                <span className="form-label">Type:</span>
                <input className="form-control brcolor" type="text" name="type" onChange={ (e) => changeHandler(e)  }/>
                <p className="text-danger">{ValErrors.type? ValErrors.type.message: ""}</p>
            </div>
            <div className="mb-3">
                <span className="form-label">Description:</span>
                <input className="form-control brcolor" type="text" name="description" onChange={ (e) => changeHandler(e)  }/>
                <p className="text-danger">{ValErrors.description? ValErrors.description.message: ""}</p>
            </div>
            <div className="mb-3">
                <span className="form-label">Skill 1:</span>
                <input className="form-control brcolor" type="text" name="skill1" onChange={ (e) => changeHandler(e)  }/>
            </div>
            <div className="mb-3">
                <span className="form-label">Skill 2:</span>
                <input className="form-control brcolor" type="text" name="skill2" onChange={ (e) => changeHandler(e)  }/>
            </div>
            <div className="mb-3">
                <span className="form-label">Skill 3:</span>
                <input className="form-control brcolor" type="text" name="skill3" onChange={ (e) => changeHandler(e)  }/>
            </div>
            <div className="mb-3">
                <span className="form-label">Upload picture:</span>
                <input onChange = {handlePhoto} type="file" accept=".png, .jpg, .jpeg" name="photo" id="" className="form-control brcolor" />
            </div>
            
            <input className="btn btn-secondary mt-4" type="submit" value="Submit" />
        </form>
        </div>
    );
};


export default Newpet; 
// style={{backgroundImage: `url(${friends})`}}
