import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import APP from "../images/apPic.png"

const Editpet = () => {
    const { id } = useParams();

    const navigate = useNavigate();
    const [petInfo, setPetInfo] = useState({
        name:"",
        type:"",
        description:"",
        skill1:"",
        skill2:"",
        skill3:""
    })
    const [ValErrors, setValErrors] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res=>{
                console.log(res)
                setPetInfo(res.data.results)})
            .catch(err=>console.log(err))       
    },id);

    const changeHandler = (e)=> {
        setPetInfo({
            ...petInfo,
            [e.target.name]:e.target.value,
        })
    };

    const editPet = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/update/${id}`, petInfo)
            .then(res=>{console.log(res)
                if(res.data.err){ 
                    setValErrors(res.data.err.errors)
                }else{ 
                    navigate("/"); 
                }})
            .catch(err=>console.log(err))
    };

    return (
        <div className="height no-r p-3 font">
            {
            <>
            <img src={APP} alt="logo pic" className='imgSize'></img>
            <h4 className='m-5 org'>{petInfo.name}</h4></>
            }
            <form className="container-sm" onSubmit={ editPet }>
            <div className="input-group mb-3">
                <span className="input-group-text org">Name:</span>
                <input className="form-control brcolor" type="text" name="name" onChange={ (e) => changeHandler(e)  } value={petInfo.name}/>
                <p className="text-danger">{ValErrors.name? ValErrors.name.message: ""}</p>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text org">Type:</span>
                <input className="form-control brcolor" type="text" name="type" onChange={ (e) => changeHandler(e)  } value={petInfo.type}/>
                <p className="text-danger">{ValErrors.type? ValErrors.type.message: ""}</p>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text org">Description:</span>
                <input className="form-control brcolor" type="text" name="description" onChange={ (e) => changeHandler(e)  } value={petInfo.description}/>
                <p className="text-danger">{ValErrors.description? ValErrors.description.message: ""}</p>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text org">Skill 1:</span>
                <input className="form-control brcolor" type="text" name="skill1" onChange={ (e) => changeHandler(e)  } value={petInfo.skill1}/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text org">Skill 2:</span>
                <input className="form-control brcolor" type="text" name="skill2" onChange={ (e) => changeHandler(e)  } value={petInfo.skill2}/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text org">Skill 3:</span>
                <input className="form-control brcolor" type="text" name="skill3" onChange={ (e) => changeHandler(e)  } value={petInfo.skill3}/>
            </div>
            
            <input className="btn btn-secondary" type="submit" value="Edit Pet" />
        </form>
        </div>
    );
};



export default Editpet;
// style={{backgroundImage: `url(${field})`}}