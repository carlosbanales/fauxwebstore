import ProductCard from './ProductCard';
import {  useEffect } from 'react';
import { Outlet, useParams} from 'react-router-dom';

function Products({products, loading, setPath}) {
  const params = useParams();

  console.log('Product component began parsed');
  
  // useEffect hook help stop warning for bad state call, need to find out
  // how to stop unnessesary rerendering 
  useEffect(() => {
    if(!loading){
      console.log("setPath to params.products");
      setPath(params.products);
    }
  });

  return (
      <>
        <Outlet />
        { loading ? <div>...loading</div> :
            <div className='products_container'>
                {products.map((item) => (
                    <ProductCard
                        key={item.id}
                        Item_Id={item.id}
                        Title={item.title}
                        Price={item.price}
                        Img={item.image}
                    />
                ))}
            </div>
        }
          
      { console.log("Product.js finsished parsing") }
      </>
  )
};

export default Products;
