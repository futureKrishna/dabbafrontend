import React from 'react'
import './styles/App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import {Ssignup,Bsignup} from './components/Signup'
import {Slogin,Blogin} from './components/Login'
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
          <Route element={<Home/>} path="/"></Route>

          <Route element={<About/>}  path="/about"></Route>

          <Route element={<Ssignup/>}  path="/ssignup"></Route>
          <Route element={<Bsignup/>}  path="/bsignup"></Route>

          <Route element={<Slogin/>}  path="/slogin"></Route>
          <Route element={<Blogin/>}  path="/blogin"></Route>

          <Route element={<ContactUs/>}  path="/contactus"></Route>

          {/* <Route element={<Errorpage/>} path="*" /> */}
      </Routes>
    </>
  );
}

export default App;
