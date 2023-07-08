import ProductCard from './ProductCard';
// import { useState, useEffect } from 'react';
import { Outlet, useParams} from 'react-router-dom';

function Products({products}) {

  console.log('Product component began parsed');

  return (
      <>
			<Outlet />
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
				{ console.log("Product.js finsished parsing") }
      </>
  )
};

export default Products;
