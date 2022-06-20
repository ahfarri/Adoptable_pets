import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div className='d-flex justify-content-end font'>
            <div className='d-flex'>
                <Link to="/" className="btn me-3">Home</Link>
                <Link to="/pets/new" className="btn me-3">Add a Pet</Link>
                <Link to="/about" className="btn me-3">About</Link>
                <Link to="/contactus" className="btn me-3">Contact Us</Link>
                <Link to="/admin" className="btn me-3">Admin</Link>
            </div>
        </div>
    )
}

export default Navbar
