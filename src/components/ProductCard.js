function ProductCard(props) {
  const {getId, key} = props;
  return (
    <div className='product_card' onClick={() => {getId(key)}}>
        <h3 className='title'>{props.Title}</h3>
        <img className="product_image" src={props.Img}/>
        <p className='price'>Price: ${props.Price}</p>
    </div>
  );
}

export default ProductCard;