import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import APP from "../images/apPic.png"


const Viewpet = () => {
    const { id } = useParams();
    const [likes, setLikes] =useState(0);
    const navigate = useNavigate();
    const [petInfo, setPetInfo] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res=>{
                console.log(res)
                setPetInfo(res.data.results)})
            .catch(err=>console.log(err))       
    },id);

    const deleteOne = (e)=> {
        axios.delete(`http://localhost:8000/api/pets/delete/${id}`)
            .then(res=>{
                console.log(res)
                navigate("/")})
            .catch(err=>console.log(err))
    };
    const liked = (e)=> {
        setLikes(likes+1)
    };

    return (
        <div className="height font">
            {
            <>
            <img src={APP} alt="logo pic" className='imgSize'></img>
            <div className="d-flex justify-content-center">
                <h2 className="text-end m-5">Details about: {petInfo.name}</h2>
                <div className="m-5">
                    <button onClick={deleteOne} className="btn btn-secondary m-2">Adopt {petInfo.name}</button>
                </div>
            </div>
            <div className="row my-5 container-sm mx-auto">
                <div className="col-6">
                    <div className='d-flex'>
                        <div className="col-6">
                            <h3>Pet Type:</h3>
                            <h3>Description:</h3>
                            <h3>Skills:</h3>
                        </div>
                        <div className="col-6">
                            <h3>{petInfo.type}</h3>
                            <h3>{petInfo.description}</h3>
                            <h3>{petInfo.skill1}</h3>
                            <h3>{petInfo.skill2}</h3>
                            <h3>{petInfo.skill3}</h3>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button className="btn btn-secondary" disabled={likes} onClick={liked} >Like {petInfo.name}</button>
                        <p className='mt-3'>{likes} like(s)</p>
                    </div>
                </div>
                <img src={`http://localhost:8000/static/${petInfo.photo}`} className="col-6" height="auto" width="200px"></img>
            </div>
            </>
            }
        </div>
    );
};



export default Viewpet;