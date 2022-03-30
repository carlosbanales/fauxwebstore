import { Routes, Route } from 'react-router-dom';
import { useEffect, useState} from 'react';
import Navbar from './Navbar';
import Products from './Products';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import Checkout from './Checkout';
import NotFound from './NotFound';
import Home from './Home';

function Navigation() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  async function fetchData() {
    try {
      setIsLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      setProductList(data);
      console.log('useEffect ran');
      setIsLoading(false);
    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
      <Navbar />
      { isLoading ? <div>...loading</div> :
      <Routes>
        <Route index element={ <Home /> } />
        <Route
          path="/products"
          element={ <Products products={productList} /> }
        />
        <Route
          path="/products/:id"
          element={ <ProductDetails products={productList}/> }
        /> 
        <Route path="/cart" element={ <Cart /> } /> 
        <Route path="/checkout" element={ <Checkout /> } />
        <Route path="*" element={ <NotFound /> } /> 
      </Routes>
      }   
    </>
  )
};

export default Navigation;
