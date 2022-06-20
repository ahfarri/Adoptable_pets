import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Allpets from './components/Allpets';
import Newpet from './components/Newpet';
import Editpet from './components/Editpet';
import Viewpet from './components/Viewpet';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Registration from './components/Registration';
import Login from './components/Login';
import Dashboard from './components/Dashboard';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
      <Navbar></Navbar>
      <Routes>
        <Route path = "/" element={<Allpets />} />
        <Route path = "/pets/new" element={<Newpet />} />
        <Route path = "/pets/:id" element={<Viewpet />} />
        <Route path = "/pets/:id/edit" element={<Editpet />} />
        <Route path = "/about" element={<About />} />
        <Route path = "/contactus" element={<Contact/>} />
        <Route path = "/admin" element={<Dashboard />} />
        <Route path = "/register" element={<Registration/>} />
        <Route path = "/admin/login" element={<Login/>} />
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;


