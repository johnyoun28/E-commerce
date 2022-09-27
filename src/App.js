import React from 'react'
import './App.css';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
      <div>

    <Routes>
      <Route path='/register' element={<Register/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
