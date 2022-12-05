import {React,useState} from "react";

function Ssignup() {
  return (
    <div className="container-ssignup">
      <h1 className="heading-signup">Seller Signup Form</h1>
      <form action="">
        <p className="text">Name: <input type="text" id="name" size="30" placeholder="Enter your name" required/></p>
        <p className="text">Contact:<input type="text" id="contact" size="30" placeholder="Enter your number" required/></p>
        <p className="text">E-mail: <input type="email" id="email" size="30" placeholder="Enter your email" required/></p>
        <p className="text">Shop Name:<input type="text" id="sname" size="30" placeholder="Enter Shop Name" required/></p>
        <p className="text">Shop Location: <input type="text" id="slocation" size="30" placeholder="Enter Your Location" required/></p>
        <p className="text">Password: <input type="password" id="password" size="30" placeholder="Enter your password" required/></p>
        <p className="text">Confirm Password: <input type="password" id="confirm" size="30" placeholder="Confirm password" required/></p>
        <button className="button">Submit</button>
      </form>
    </div>
  );
}

function Bsignup() {
  const[name,setName]=useState("")
  const[contact,setContact]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[cpassword,setCpassword]=useState("")

  function update1(e){
    setName(e.target.value)
  }
  function update2(e){
    setContact(e.target.value)
  }
  function update3(e){
    setEmail(e.target.value)
  }
  function update4(e){
    setPassword(e.target.value)
  }
  function update5(e){
    setCpassword(e.target.value)
  }

  const signupUser=async(e)=>{
    e.preventDefault()

    const name1=name
    const contact1=contact
    const email1=email
    const password1=password
    const cpassword1=cpassword

    const res=await fetch("/bsignup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        name1,contact1,email1,password1,cpassword1
      })
    })

    const data=await res.json();
    
    if(data.status===422 || !data){
      window.alert("Invalid Registration")
    }
    else{
      window.alert("Successfull Registration")
    }
  }

  return (
    <div className="container-bsignup">
      <h1 className="heading-signup">Buyer Signup Form</h1>
      <form action="">
        <p className="text">Name: <input name="name" type="text" id="name" size="30" value={name} onChange={update1} placeholder="Enter your name" required/></p>
        <p className="text">Contact:<input name="contact" type="text" id="contact" size="30" value={contact} onChange={update2} placeholder="Enter your number" required/></p>
        <p className="text">E-mail: <input name="email" type="email" id="email" size="30" value={email} onChange={update3} placeholder="Enter your email" required/></p>
        <p className="text">Password: <input name="password" type="password" id="password" size="30" value={password} onChange={update4} placeholder="Enter your password" required/></p>
        <p className="text">Confirm Password: <input name="cpassword" type="password" id="confirm" size="30" value={cpassword} onChange={update5} placeholder="Confirm password" required/></p>
        <button className="button" onClick={signupUser}  >Submit</button>
      </form>
    </div>
  );
}

export { Bsignup, Ssignup };
