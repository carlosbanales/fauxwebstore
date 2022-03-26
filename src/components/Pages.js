import { Routes, Route } from 'react-router-dom';
import Products from './Products';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import Checkout from './Checkout';
import NotFound from './NotFound';
import Home from './Home';

function Pages() {
  return (
    <Routes>
      <Route index element = { <Home /> } />
      <Route path="/products" element={ <Products /> } />
      <Route path="/productdetails" element={ <ProductDetails /> } /> 
      <Route path="/cart" element={ <Cart /> } /> 
      <Route path="/checkout" element={ <Checkout /> } />
      <Route path="*" element={ <NotFound /> } /> 
    </Routes>
  )
};

export default Pages;