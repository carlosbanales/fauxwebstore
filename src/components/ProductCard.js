import { useNavigate } from 'react-router-dom';

function ProductCard(props) {
  const {setId, id} = props;
  const navigate = useNavigate();
  return (
    <div className='product_card'
      onClick={() => {setId(id); navigate('/products/'+id);}}>
        <h3 className='title'>{props.Title}</h3>
        <img className="product_image" src={props.Img}/>
        <p className='price'>Price: ${props.Price}</p>
    </div>
  );
}

export default ProductCard;