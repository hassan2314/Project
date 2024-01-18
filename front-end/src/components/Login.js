import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';





const Login = () => {
  const navigate= useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

useEffect(()=>{
  const auth= localStorage.getItem("user");
  if(auth){
    navigate('/')
  }
})
const collectData = async () => {
  console.log( email, password);

   try {
   
     const result = await fetch("http://localhost:4500/login", {
       method: "post",
       body: JSON.stringify({ email, password }),
       headers: {
         "Content-Type": "application/json",
       },
     });

     if (!result.ok) {
       // Handle errors here if needed
       console.error("Login failed");
       return;
     }

     const data = await result.json();
     console.log(data);
     navigate('/login')
     localStorage.setItem("user",JSON.stringify(data));
    // console.log("Stop")
   } 
   catch (error) {
     console.error("Error:", error);
   }

};
  return (
    <div class="container">
      <div className="Login">
      <h1>Login</h1>
      <div className="inputs">
        <input
          type="email"
          placeholder="Enter Email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="Enter Password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <input onClick={collectData} type="submit" value="Sign in" />
      </div>
    </div>
    </div>
  )
}

export default Login;
