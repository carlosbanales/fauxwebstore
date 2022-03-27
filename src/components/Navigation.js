import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Products from './Products';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import Checkout from './Checkout';
import NotFound from './NotFound';
import Home from './Home';

function Navigation({products}) {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={ <Home /> } />
        <Route path="/products" element={ <Products allProducts={products} /> } >
          <Route path=":id" element={ <ProductDetails /> } /> 
        </Route>
        <Route path="/cart" element={ <Cart /> } /> 
        <Route path="/checkout" element={ <Checkout /> } />
        <Route path="*" element={ <NotFound /> } /> 
      </Routes>
    </>
  )
};

export default Navigation;