import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav>
        <Link className='header' >TiffinBox</Link>
        <Link className='title' to="/">Home</Link>
        <Link className='title' to="/about">About</Link>
        <Link className='title' to="/ssignup">Ssignup</Link>
        <Link className='title' to="/bsignup">Bsignup</Link>
        <Link className='title' to="/blogin">Blogin</Link>
        <Link className='title' to="/slogin">Slogin</Link>
        <Link className='title' to="/contactus">Contact Us</Link>
    </nav>
    </>
  )
}

export default Navbar


/* <select>
            <option><Link className='title' to="/ssignup">Seller Signup</Link></option>
            <option><Link className='title' to="/bsignup">Buyer Signup</Link></option>
        </select>

        <select>
            <option><Link className='title' to="/slogin">Seller Login</Link></option>
            <option><Link className='title' to="/blogin">Buyer login</Link></option>
</select> */