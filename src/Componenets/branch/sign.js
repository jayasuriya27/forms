import React, { useState } from "react";
import "./sign.css";
import { Link } from "react-router-dom";

function Sign() {

  const[name,setname] = useState("");
  const[pass,setpass] = useState("");

function submit(x){
  x.preventDefault();
  const names = x.target.names.value;
  const password = x.target.password.value;

  if(names.length=== 0){
    setname("* Email or Phone Number required *")
  }
  else{
    setname("")
  }

  if(password.length===0){
    setpass("* Password required *")
  }
  else if(password.length<8){
    setpass("* Password must be atleat 8 charactres *")
  }
  else{
    setpass("")
  }

}
  return (
    <div className="back1">
      <div className="form1">
        <div>
          <h1>Welcome to Page</h1>
          <h3>Sign In</h3>
          <div className="sign-up">
           <Link className="click"><img src={require("../images/facebook.png")} alt="fb"/></Link> 
           <Link className="click"><img src={require("../images/google.png")} alt="google"/></Link> 
          </div>
        </div>
        <form onSubmit={submit}>
          <input
            type="text"
            id="username"
            placeholder="PhoneNumber or Email"
            name="names"
          ></input>
          <span>{name}</span>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
          ></input>
          <span>{pass}</span>
          <button>Sign In</button>
        </form>
        <div className="account">
          <p>If you don't have a account click here</p>
          <Link to = '/create' className="create">Create Account</Link>
        </div>
      </div>
    </div>
  );
}

export default Sign;
