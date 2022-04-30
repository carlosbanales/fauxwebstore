function Cart({carts}) {

	console.log(carts);

	return (  
		<div>
			<div className='products_container'>      
				{carts.map((cart, index) => (      
					<div key={index}>
						<h2>{cart.date}</h2>
					</div>      
        ))}
			</div>
		</div>
  );
}

export default Cart;
