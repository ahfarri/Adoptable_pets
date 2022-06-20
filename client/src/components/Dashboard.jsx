import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, Link} from "react-router-dom"; 
import APP from "../images/apPic.png"

function Dashboard() {
const [loggedinuser, setLoggedInUser] = useState({});
const navigate = useNavigate();
const [listOfComms, setListofComms] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/users/getloggedinuser", {withCredentials:true})
            .then(res=>{
                console.log("logged in user info", res)
                setLoggedInUser(res.data)
            })
            .catch(err=> {
                navigate("/admin/login")
                console.log("errorrrrrr",err)
            })
    }, [])

    const logout = (e)=>{
        console.log("clicked logout")
        console.log("clicked logout2")
        axios.get("http://localhost:8000/api/logout")
            .then(res=>{
                console.log("LOGGGIN OUT", res)
                if(res.data.msg == "success!"){
                    navigate("/")
                }
            })
            .catch(err=>console.log(err.response.data))
        console.log("clicked logout3")
        navigate('/')
    }

    const viewAll = (e)=> {
        console.log(listOfComms)
        axios.get("http://localhost:8000/api/comments")
            .then(res=>{
                setListofComms(res.data.results)
                console.log(res)})
            .catch(err=>console.log(err))       
    }

    const deleteOne = (e)=> {
        axios.delete(`http://localhost:8000/api/comments/delete/${e.target.value}`)
            .then(res=>{
                console.log(res)
                navigate("/admin")
                })
            .catch(err=>console.log(err))
    };


    return (
        <div onLoad={viewAll} className="font">
        <img src={APP} alt="logo pic" className='imgSize'></img>
        <div className='d-flex justify-content-end me-5'>
            <button onClick={logout} className="btn btn-secondary d-flex">Logout</button>
        </div>
        <h1 className='org'>Welcome {loggedinuser.firstName}!</h1>
        <div className="container-sm">
            <table className="table caption-top table-striped">
                <caption className="text-center mt-4 fs-4">All Comments:</caption>
                <thead className="table-light">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Comments</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfComms.map((Comm,i) =>{
                        return <tr className="table-success fs-5 align-middle" key={i}>
                                    <td >{Comm.name}</td>
                                    <td >{Comm.email}</td>
                                    <td>{Comm.comment}</td>
                                    <td><button className='btn org' onClick={ (e) => deleteOne(e)} value={Comm._id}>Delete</button></td>
                                </tr>
                            })}
                </tbody>
            </table>
        </div>
        <button onClick={viewAll} className='btn btn-secondary mt-4'>Refresh</button>
        </div>
    )
}

export default Dashboard
