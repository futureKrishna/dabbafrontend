import {React,useState} from "react";

function Slogin() {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  function updateEmail(e){
    setEmail(e.target.value)
  }

  function updatePassword(e){
    setPassword(e.target.value)
  }

  const loginUser=async(e)=>{
    e.preventDefault();

    const res=await fetch("/slogin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email,password
      })
    })

    const data=await res.json();
    if(res.status===400 || !data){
      window.alert("Invalid Credential")
    }
    else{
      window.alert("Successfull Login")
    }
  }

  return (
    <>
    <div className="container-login">
      <h1 className="heading-signup">Seller Login Form</h1>
      <form method="POST" >
        <p className="text">Email: <input type="email" id="email" size="30" value={email} onChange={updateEmail} placeholder="Enter your email" required/></p>
        <p className="text">Password:<input type="password" id="password" size="30" value={password} onChange={updatePassword} placeholder="Enter your password" required/></p>
        <button type="submit" onClick={loginUser} className="button">Submit</button>
      </form>
    </div>
    </>
  );
}

function Blogin() {
    return (
    <>
    <div className="container-login">
      <h1 className="heading-signup">Buyer Login Form</h1>
      <form action="">
        <p className="text">Email: <input type="email" id="email" size="30" placeholder="Enter your email" required/></p>
        <p className="text">Password:<input type="password" id="password" size="30" placeholder="Enter your password" required/></p>
        <button className="button">Submit</button>
      </form>
    </div>
    </>
  );
}

export{Blogin,Slogin}
