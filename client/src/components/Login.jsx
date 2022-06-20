import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, Link} from "react-router-dom";
import APP from "../images/apPic.png"

function Login() {
    const navigate = useNavigate();
    const [loginInfo, setLoginInfo] = useState({ 
        email:"",
        password:"",
    })
    const [ValErrors, setValErrors] = useState()

    const changeHandler = (e)=>{
        setLoginInfo({
            ...loginInfo,
            [e.target.name]:e.target.value
        })
    }

    const login = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/login", loginInfo, {withCredentials:true} )
            .then(res=>{
                console.log("LOGGGIN IN RESPONSE", res)
                if(res.data.msg == "success!"){
                    navigate("/admin")
                }else{
                    setValErrors(res.data.msg)
                }
            })
            .catch(err=>{console.log(err)})
    }


    return (
        <div className='font'>
            <img src={APP} alt="logo pic" className='imgSize mb-4'></img>
            <h4 className='my-4 org'>Login Here:</h4>
            <form onSubmit= {login} className='form-w mx-auto'>
                <p className="text-danger">{ValErrors}</p>
                <div>
                    <label>Email:</label>
                    <input onChange = {changeHandler} type="text" className="form-control brcolor" name= 'email' />
                </div>
                <div>
                    <label>Password:</label>
                    <input onChange = {changeHandler} type="password" className="form-control brcolor" name= 'password' />
                </div>
                <input type="submit" value="Login" className= "btn btn-secondary mt-3" />
            </form>
            <Link to={`/register`}><button className='text-reset btn mt-3'>Register here!</button></Link>
        </div>
    )
}

export default Login
