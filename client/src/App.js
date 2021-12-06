import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet, Link, Route, Routes } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap';
import Home from './Components/Home.js';
import Gardens from './Components/Gardens.js';
import Plants from './Components/Plants.js';
import Users from './Components/Users';

function App() {
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

        </Routes>
      </Container>
    
    </>
  );
}

export default App;
