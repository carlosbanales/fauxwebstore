import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';
import { Outlet, useParams} from 'react-router-dom';

function Products({products, loading, setPath}) {
  const [flag, setFlag] = useState(true);
  const params = useParams();

  // have to find a way to update the path without the state error
  console.log('Product component began parsed');
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
