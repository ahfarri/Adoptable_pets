import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import APP from "../images/apPic.png"

function Registration() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    })
    const [ValErrors, setValErrors] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirm:""

    })

    const changeHandler = (e)=> {
        setUserInfo({
            ...userInfo,
            [e.target.name]:e.target.value,
        })
    };

    const register = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/register", userInfo, {withCredentials:true})
            .then(res=>{
                console.log("response from registering", res);
                if(res.data.errors){
                    console.log(res.data.errors)
                    setValErrors(res.data.errors)
                }else{
                    console.log("success!")
                }
            })
            .catch(err=> console.log(err))
            setUserInfo({
                firstName:"",
                lastName:"",
                email:"",
                password:""
            })
    };

    return(
        <div className='font'>
            <img src={APP} alt="logo pic" className='imgSize'></img>
            <h4 className='my-4 org'>Register Here:</h4>
            <form onSubmit={(e)=>register(e)} className='form-w mx-auto'>
                <div>
                    <label className="form-label" for="firstName">First Name: </label>
                    <input className="form-control brcolor" name="firstName" type="text" value={userInfo.firstName} onChange = {(e) => changeHandler(e)} />
                    {ValErrors.firstName? <p className="text-danger">{ValErrors.firstName.message}</p>: ""}
                </div>
                <div>
                    <label className="form-label" for="lastName">Last Name: </label>
                    <input className="form-control brcolor" type="text" name="lastName" value={userInfo.lastName} onChange = {(e) => changeHandler(e)} />
                    {ValErrors.lastName? <p className="text-danger">{ValErrors.lastName.message}</p>: ""}
                </div>
                <div>
                    <label className="form-label" for="email">Email: </label>
                    <input  type="email" name="email" className="form-control brcolor" value={userInfo.email} onChange = {(e) => changeHandler(e)} />
                    {ValErrors.email? <p className="text-danger">{ValErrors.email.message}</p>: ""}
                </div>
                <div>
                    <label className="form-label" for="password">Password: </label>
                    <input className="form-control brcolor" type="password"  name="password" value={userInfo.password} onChange = {(e) => changeHandler(e)} />
                    {ValErrors.password? <p className="text-danger">{ValErrors.password.message}</p>: ""}
                </div>
                <div>
                    <label className="form-label" for="password"> Confirm Password: </label>
                    <input className="form-control brcolor" type="password"  name="confirm" value={userInfo.confirm} onChange = {(e) => changeHandler(e)} />
                    {ValErrors.confirm? <p className="text-danger">{ValErrors.confirm.message}</p>: ""}
                </div>
                <input type="submit" value="Register" className= "btn btn-secondary mt-4" />
            </form>
        </div>
    )       
}


export default Registration
