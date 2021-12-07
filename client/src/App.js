import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Outlet, Link, Route, Routes } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap';
import Home from './Components/Home.js';
import Gardens from './Components/Gardens.js';
import Plants from './Components/Plants.js';
import Users from './Components/Users';
import Login from './Components/Login';
import GardenForm from './Components/GardenForm';
import PlantForm from './Components/PlantForm';


const App = () => {
  
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [currentUser, setCurrentUser] = useState(null);
  // useEffect(() => {
  //   fetch("/me").then((res) => {
  //     if (res.ok) {
  //       res.json().then((user) => {
  //         setCurrentUser(user);
  //         setIsAuthenticated(true);
  //       });
  //     }
  //   });
  // }, []);
  // if (!isAuthenticated) {
  //   return <div></div>;
  // }
 
  return (
    <>
      <Navbar>
          <Container>
            <h1> plant-based 🌱 </h1> 
            <Link to="/"> home </Link>
            <Link to="/users"> users </Link>
            <Link to="/gardens"> gardens </Link>
            <Link to="/plants"> plants </Link>

          </Container>
        </Navbar>
        <Outlet/>

      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/gardens" element={<Gardens/>}/>
          <Route path="/plants" element={<Plants/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path = "/garden_form" element={<GardenForm/>}/>
          <Route path = "/plant_form" element={<PlantForm/>}/>


        </Routes>
      </Container>
    
    </>
  );
}

export default App;
