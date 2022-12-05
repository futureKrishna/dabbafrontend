import React from 'react'
import '../styles/contactus.css';


function ContactUs() {
  return (
<>
    <div className="contactus">
      <div className="contactus1">
        <h1 className="head">Have a query!!! Let us know about it.</h1>
        <form action="">
        <p className="us">Name: <input type="text" id="cname" size="30" placeholder="Enter your name" required/></p>
        <p className="us">E-mail: <input type="email" id="cemail" size="30" placeholder="Enter your email" required/></p>
        <p className="us">Query: <textarea rows="5" cols="50" type="text"id="cquery" placeholder="Enter Your Query" required> </textarea></p>
        <button className="button-us">Submit</button>
        </form>
        </div>
    </div>
</>
  )
}

export default ContactUs

