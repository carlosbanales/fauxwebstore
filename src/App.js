import './App.css';
import { Routes, Route, useParams } from 'react-router-dom';
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
  const [isLoading, setIsLoading] = useState(false);
  const [currentPath, setCurrentPath] = useState('');    

  console.log('App js file parsing began');

  async function fetchData(a_path) {
    try {
      setIsLoading(true);
      const res = await fetch(`https://fakestoreapi.com/${a_path}`);
      const data = await res.json();
      setProductList(data);
      console.log('useEffect ran');
      setIsLoading(false);
    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => {
    currentPath !== '' && fetchData(currentPath);
  }, [currentPath]);
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={ <Home /> } />
        <Route path="/:products"
          element={ <Products
            products={productList}
            loading={isLoading}
            setPath={setCurrentPath}
          />}
        />
        <Route
          path="/products/:id"
          element={ <ProductDetails products={productList} /> }
        /> 
        <Route path="/cart" element={ <Cart /> } /> 
        <Route path="/checkout" element={ <Checkout /> } />
        <Route path="*" element={ <NotFound /> } /> 
      </Routes>
      { console.log("App.js finished parsing") }
    </>
  )
};

export default App;
