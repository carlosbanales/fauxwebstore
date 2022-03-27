import { useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';

function App() {
  const [storeData, setStoreData] = useState([]);
  const [path, setPath] = useState('products');

  async function fetchData(thePath) {
    try {
      const res = await fetch(`https://fakestoreapi.com/${thePath}`);
      const data = await res.json();
      setStoreData(data);
    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(path);
  }, [path]);

  return (
    <Navigation 
      products={storeData}
    />
  );
}

export default App;
