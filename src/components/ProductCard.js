import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function ProductCard(props) {
  const {Item} = props;
  const [itemId, setItemId] = useState('');
  const navigate = useNavigate();
  
  // stops infinite loop
  itemId === '' && setItemId(Item.id);

  return (
    <div className='product_card'
      onClick={() => { navigate('/products/'+itemId) }}>
        <h3 className='title'>{props.Title}</h3>
        <img className="product_image" src={props.Img} />
        <p className='price'>Price: ${props.Price}</p>
    </div>
  );
}

export default ProductCard;