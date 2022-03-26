import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Pages from './components/Pages';

function App() {
  const [storeData, setStoreData] = useState();

  async function fetchData() {
    try {
      const promise = await fetch('https://fakestoreapi.com/products');
      const data = await promise.json();
      console.log(data);
    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
}

export default App;
