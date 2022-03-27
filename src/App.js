import { useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';

function App() {
  const [storeData, setStoreData] = useState();

  async function fetchData() {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setStoreData(data);
    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Navigation 
      products={storeData}
    />
  );
}

export default App;
