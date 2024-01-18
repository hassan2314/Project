import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';

 const Signup = () => {

const navigate= useNavigate();
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


useEffect(()=>{
  const auth= localStorage.getItem("user");
  if(auth){
    navigate('/')
  }
})

const collectData = async () => {
  console.log(name, email, password);

  try {
   
    const result = await fetch("http://localhost:4500/register", {
      method: "post",
      body: JSON.stringify({ email, name, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!result.ok) {
      // Handle errors here if needed
      console.error("Registration failed");
      return;
    }

    const data = await result.json();
    console.log(data);
    navigate('/')
    localStorage.setItem("user",JSON.stringify(data));
   // console.log("Stop")
  } 
  catch (error) {
    console.error("Error:", error);
  }

};

  return (
    <div className="signup">
      <h1>Register</h1>
      <div className="inputs">
        <input
          type="text"
          placeholder="Enter Name"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Enter Email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter Password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input onClick={collectData} type="submit" value="Sign Up" />
      </div>
    </div>
  );
};

export default Signup;
