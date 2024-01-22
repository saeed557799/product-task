import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login.tsx';
import ProductDetails from './components/productDetail.tsx';

const  App: React.FC  = () =>  {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/product/:productId' element={<ProductDetails />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
