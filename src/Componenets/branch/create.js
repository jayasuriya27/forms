import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sign.css";

function Create() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [mail, setmail] = useState("");
  const [number, setnumber] = useState("");
  const [pass, setpass] = useState("");
  const [cpass, setcpass] = useState("");

  function submit(x) {
    x.preventDefault();
    const first = x.target.firstname.value;
    const last = x.target.lastname.value;
    const email = x.target.email.value;
    const phone = x.target.phone.value;
    const password = x.target.password.value;
    const cpassword = x.target.cpassword.value;

    function validemail(email) {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(email);
    }

    if (first.length === 0) {
      setfname("* First Name required *");
    } else {
      setfname("");
    }

    if (last.length === 0) {
      setlname("* Last Name required *");
    } else {
      setlname("");
    }

    if (email.length === 0) {
      setmail("* Email required *");
    } else if (!validemail(email)) {
      setmail("* Enter a valid Email id *");
    } else {
      setmail("");
    }

    if (phone.length === 0) {
      setnumber("* Phone Number required *");
    } else if (!phone.match("^[0-9]{10}$")) {
      setnumber("* Enter a valid phone number *");
    } else {
      setnumber("");
    }

    if (password.length === 0) {
      setpass("* Password required *");
    } else if (password.length < 8) {
      setpass("* Password must be atleast 8 characters *");
    } else {
      setpass("");
    }

    if (password.length === 0) {
      setcpass("");
    } else if (cpassword !== password) {
      setcpass("* Password does not match*");
    } else {
      setcpass("");
    }
  }
  return (
    <div className="back2">
      <div className="form2">
        <div>
          <h2>Create your Account</h2>
          <div className="signup">
            <Link className="click">
              <img src={require("../images/facebook.png")} alt="fb" />
            </Link>
            <Link className="click">
              <img src={require("../images/google.png")} alt="google" />
            </Link>
          </div>
        </div>
        <form onSubmit={submit}>
          <input
            type="text"
            name="firstname"
            id="first"
            placeholder="First Name"
          ></input>
          <span>{fname}</span>
          <input
            type="text"
            name="lastname"
            id="last"
            placeholder="Last Name"
          ></input>
          <span>{lname}</span>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
          ></input>
          <span>{mail}</span>
          <input
            type="text"
            name="phone"
            id="no"
            placeholder="Phone Number"
          ></input>
          <span>{number}</span>
          <input
            type="password"
            name="password"
            id="pass"
            placeholder="Password"
          ></input>
          <span>{pass}</span>
          <input
            type="password"
            name="cpassword"
            id="cpass"
            placeholder="Confirm Password"
          ></input>
          <span>{cpass}</span>

          <div className="check-box">
            <input type="checkbox" name="checkbox" id="box"></input>
            <label for="box">
              <p className="read">
                {" "}
                I read and agree to{" "}
                <Link to="" className="terms">
                  terms and conditions
                </Link>
              </p>
            </label>
          </div>
          <button>Create account</button>
        </form>

        <div className="sign">
          <p>Already have an account?</p>
          <Link to="/" className="sign-in">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Create;
