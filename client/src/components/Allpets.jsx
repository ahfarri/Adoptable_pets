import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AP from '../images/AP.png'



const Allpets = () => {
    const [listOfPets, setListofPets] = useState([]);
    const [searchterm, setSearchterm] = useState("");


    useEffect(()=>{
        console.log(listOfPets)
        axios.get("http://localhost:8000/api/pets")
            .then(res=>{
                setListofPets(res.data.results)
                console.log(res.data.results)})
            .catch(err=>console.log(err))       
    }, []);

    return (
        <div className="p-3 font">
            {
            <>
            <form className='d-flex justify-content-end me-3'>
                <input onChange= {e=>setSearchterm(e.target.value)} type="text" placeholder="Type"></input>
                <input type="submit" value="Search"></input>
            </form>
            <div>
                <img src={AP} alt="logo"></img>
            </div>
            <div className="container-sm">
            <table className="table caption-top table-striped">
                <caption className="text-center my-4 fs-3 org">Pets looking for a good home:</caption>
                <thead className="table-light">
                    <tr>
                        <th scope="col">Photo</th>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfPets.filter(Pet=>
                        Pet.type.toLowerCase().includes(searchterm)).map((Pet,i)=> {
                        return <tr className="table-success fs-5 align-middle" key={i}>
                                    <td><img src={`http://localhost:8000/static/${Pet.photo}`} alt="" height="100px" width="100px"/></td>
                                    <td >{Pet.name}</td>
                                    <td >{Pet.type}</td>
                                    <td>
                                        <Link to={`/pets/${Pet._id}`} className='btn btn-secondary me-2'>Details</Link>
                                        <Link to={`/pets/${Pet._id}/edit`} className='btn btn-secondary'>Edit</Link>
                                    </td>
                                </tr>
                            })}
                </tbody>
            </table>
            </div>
            </>
            }
        </div>
    );
};

export default Allpets;