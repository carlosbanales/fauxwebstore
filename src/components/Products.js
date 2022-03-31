import ProductCard from './ProductCard';
import { Outlet } from 'react-router-dom';

function Products({products, loading}) {
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
      </>
  )
};

export default Products;
