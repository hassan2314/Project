import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Nav = () => {
  const auth= localStorage.getItem("user");
  const navigate= useNavigate();
  const Loguout= ()=>{
    
    localStorage.clear();
    navigate ('/singup');
  }
  return (
    <div className='nav-ul'>
      <ul className='ul'>
      <li> <Link to='/'> Home Page </Link> </li>
      <li> <Link to='/product'>Products </Link> </li>
      <li>  <Link to='/cart'> Cart  </Link> </li>
      <li>  <Link to='/order'> Order  </Link> </li>
      <li>  <Link to='/about'> About us  </Link> </li>
       <li><Link to='/contact'> Contact </Link> </li>
      { 
      auth ?  <li><Link onClick={Loguout} to='/signup'> Loguout  </Link> </li>:
       <>
       <li><Link to='/signup'> Sign Up </Link></li>
       <li><Link to='/login'> Login </Link> </li>
       </>
       }
       
      
       
      </ul>
    </div>
  )
}

export default Nav
