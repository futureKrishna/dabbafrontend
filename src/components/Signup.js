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
  // const[name,setName]=useState("")
  // const[phone,setPhone]=useState("")
  // const[email,setEmail]=useState("")
  // const[password,setPassword]=useState("")
  // const[cpassword,setCpassword]=useState("")

  const [credentials, setCred] = useState({name:"" , phone:"" , email:"" , password:"" , cpassword:""});

  const signupUser=async(e)=>{

    e.preventDefault()

    const {name , phone , email , password , cpassword} = credentials;

    const res=await fetch("/bsignup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({name , phone , email , password , cpassword})
    })

    const data=await res.json();
    
    if(data.status===422 || !data){
      window.alert("Invalid Registration")
    }
    else{
      window.alert("Successfull Registration")
    }
  }

  // function update1(e){
  //   setName(e.target.value)
  // }
  // function update2(e){
  //   setPhone(e.target.value)
  // }
  // function update3(e){
  //   setEmail(e.target.value)
  // }
  // function update4(e){
  //   setPassword(e.target.value)
  // }
  // function update5(e){
  //   setCpassword(e.target.value)
  // }

  const onChange=(e)=>{
    setCred({...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className="container-bsignup">
      <h1 className="heading-signup">Buyer Signup Form</h1>
      <form>
        <p className="text">Name: <input name="name" type="text" id="name" size="30" value={credentials.name} onChange={onChange} placeholder="Enter your name" required/></p>
        <p className="text">Contact:<input name="phone" type="text" id="contact" size="30" value={credentials.phone} onChange={onChange} placeholder="Enter your number" required/></p>
        <p className="text">E-mail: <input name="email" type="email" id="email" size="30" value={credentials.email} onChange={onChange} placeholder="Enter your email" required/></p>
        <p className="text">Password: <input name="password" type="password" id="password" size="30" value={credentials.password} onChange={onChange} placeholder="Enter your password" required/></p>
        <p className="text">Confirm Password: <input name="cpassword" type="password" id="confirm" size="30" value={credentials.cpassword} onChange={onChange} placeholder="Confirm password" required/></p>
        <button className="button" onClick={signupUser}  >Submit</button>
      </form>
    </div>
  );
}

export { Bsignup, Ssignup };
https://github.com/futureKrishna/dabbafrontend
1-git init -b main
2-git add .
3-git commit -m "firstcommit"
4-git remote add origin repo-url
5-git push -f -u origin main
Done
