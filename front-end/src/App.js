import Nav from './components/Nav';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

import Signup from './components/Signup';
import { Component } from 'react';
import Login from './components/Login';
import PrivateComponent from './components/PrivateComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
     <Routes>
      <Route element={<PrivateComponent/>}>
      <Route path='/' element={<h1>Home</h1>}></Route>
      <Route path='/cart' element={<h1>Cart</h1>}></Route>
      <Route path='/product' element={<h1>Products</h1>}></Route>
      <Route path='/order' element={<h1>Order</h1>}></Route>
      <Route path='/about' element={<h1>Aboout</h1>}></Route>
      <Route path='/contact' element={<h1>Contact</h1>}></Route>
      </Route>
      
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login'  element={<Login/>}></Route>
     </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
