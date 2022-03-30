import { useParams } from "react-router-dom";
import { useState } from 'react';

function ProductDetails({products}) {
  const [loading, setLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [productFlag, setProductFlag] = useState(false);
  const [pathFlag, setPathFlag] = useState(false);
  const [path, setPath] = useState('');
  
  const params = useParams();
  console.log('Product Details Component ran');

  if (products.length > 0 && !productFlag) {
    setAllProducts(products);
    // setFlag() stops infinite loop
    setProductFlag(true);
  }
  if (allProducts.length > 0 && !pathFlag) {
    console.log('this is allProduct below');
    console.log(allProducts);
    setPath(params.id);
    setPathFlag(true);
  }
  
  return (  
    <>
      { (productFlag && pathFlag) &&
        <div className='product_card'>
          <h3 className='title'>{allProducts[path].title}</h3>
          <img className="product_image" src={allProducts[path].image}/>
          <p className='price'>Price: ${allProducts[path].price}</p>
        </div>
      }
    </>
  );
}

export default ProductDetails;