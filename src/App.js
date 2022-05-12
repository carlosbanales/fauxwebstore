import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import NotFound from './components/NotFound';
import Home from './components/Home';

function App() {
  const [productList, setProductList] = useState([]);
	const [cartList, setCartList] = useState([]);

  console.log('App js file ran');

  async function fetchData() {
    try {
			const cartResults = await fetch('https://fakestoreapi.com/carts');
			const cartData = await cartResults.json();
      const productResults = await fetch('https://fakestoreapi.com/products');
      const productData = await productResults.json();
      setProductList(productData);
			setCartList(cartData);
      console.log('useEffect ran');
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
      <Routes>
        <Route index element={ <Home /> } />
        <Route path="/:products"
          element={ <Products
            products={productList}
          />}
        />
        <Route
          path="/products/:id"
          element={ <ProductDetails products={productList} /> }
        /> 
        <Route path="/cart" element={ <Cart carts={cartList} /> } /> 
        <Route path="/checkout" element={ <Checkout /> } />
        <Route path="*" element={ <NotFound /> } /> 
      </Routes>
    </>
  )
};

export default App;
