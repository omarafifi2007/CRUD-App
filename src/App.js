import React from 'react';
import Home from './Pages/Home';
import Products from './Pages/Products';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import AddProduct from './Pages/AddProduct';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>

        <div className='row'>
          <div className='col-2 sidebar'>
            <Sidebar />
          </div>

          <div className='col-10'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Products' element={<Products />} />
              <Route path='Products/Add' element={<AddProduct />} />
              <Route path='Product/:productID' element={<ProductDetails />} />
            </Routes>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;