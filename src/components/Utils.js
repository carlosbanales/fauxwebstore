export async function fetchData(thePath) {
    try {
      const res = await fetch(`https://fakestoreapi.com/${thePath}`);
      const data = await res.json();
      console.log('fetchData function ran');
      console.log(data);
      return data;
    } catch(error) {
      console.log(error);
    }
  };