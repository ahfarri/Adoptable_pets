import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import APP from '../images/apPic.png'

function Contact() {

    const navigate = useNavigate();
    const [commInfo, setCommInfo] = useState({
        name: "",
        email: "",
        comment: ""
    })
    const [ValErrors, setValErrors] = useState({});

    const changeHandler = (e) => {
        console.log (commInfo)
        setCommInfo({
            ...commInfo,
            [e.target.name]: e.target.value,
        })
    };

    const createComm = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/comments/new', commInfo)
            .then(res => {
                console.log(res)
                if (res.data.err) {
                    setValErrors(res.data.err.errors)
                } else {
                    navigate("/");
                }
            })
            .catch(err => console.log(err))
        setCommInfo({
            name: "",
            email: "",
            comment: ""
            })
        };
    

        return (
            <div className="no-r p-3 height font">
                <img src={APP} alt="logo pic" className='imgSize'></img>
                <h4 className='my-4 org'>Contact Us!</h4>
                <form className="form-w mx-auto" onSubmit={createComm}>
                    <div className="mb-3">
                        <span className="form-label">Name:</span>
                        <input className="form-control brcolor" type="text" name="name" onChange={(e) => changeHandler(e)} value={commInfo.name} />
                        <p className="text-danger">{ValErrors.name ? ValErrors.name.message : ""}</p>
                    </div>
                    <div className="mb-3">
                        <span className="form-label">Email:</span>
                        <input className="form-control brcolor" type="email" name="email" onChange={(e) => changeHandler(e)} value={commInfo.email} />
                        <p className="text-danger">{ValErrors.email ? ValErrors.email.message : ""}</p>
                    </div>
                    <div className="mb-3">
                        <span className="form-label">Comment:</span>
                        <textarea className="form-control brcolor" name="comment" onChange={(e) => changeHandler(e)} value={commInfo.comment} />
                        <p className="text-danger">{ValErrors.comment ? ValErrors.comment.message : ""}</p>
                    </div>
                    <input className="btn btn-secondary" type="submit" value="Submit" />
                </form>
            </div>
        )
    }

    export default Contact
