import React from 'react'
import './App.css';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';
import {Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/products' element={<ProductList />}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/register' element={<Register/>} ></Route>
      <Route path='/login' element={<Login/>} ></Route>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
  );
}

export default App;
