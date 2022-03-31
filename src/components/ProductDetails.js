import { useParams, Link } from "react-router-dom";
import { useState } from 'react';

function ProductDetails({products}) {
  const [allProducts, setAllProducts] = useState([]);
  const [productFlag, setProductFlag] = useState(false);
  const [pathFlag, setPathFlag] = useState(false);
  const [path, setPath] = useState('');
  const params = useParams();

  // setProductFlag stops infinite loop
  if (products.length > 0 && !productFlag) {
    setAllProducts(products);
    setProductFlag(true);
  }
  // second if statement depends on the first statement
  if (allProducts.length > 0 && !pathFlag) {
    setPath(params.id - 1);
    setPathFlag(true);
  }
  
  if (path !== '') {
    console.log('path: ', path);
  }

  return (  
    <>
      { (productFlag && pathFlag) &&
        <>
          <Link to='/products'>back</Link>
          <div className='product_card'>
            <h3 className='title'>{allProducts[path].title}</h3>
            <img className="product_image" src={allProducts[path].image}/>
            <p className='category'>Category: {allProducts[path].category}</p>
            <p className='description'>Description: {allProducts[path].description}</p>
            <p className='price'>Price: ${allProducts[path].price}</p>
          </div>
        </>
      }
    </>
  );
}

export default ProductDetails;
