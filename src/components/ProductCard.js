function ProductCard(props) {
  return (
    <div className='product_card'>
        <h3 className='title'>{props.Title}</h3>
        <img className="product_image" src={props.Img}/>
        <p className='price'>${props.Price}</p>
    </div>
  );
}

export default ProductCard;