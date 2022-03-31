import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function ProductCard(props) {
  const {Item_Id} = props;
  const [itemId, setItemId] = useState('');
  const navigate = useNavigate();
  
  // stops infinite loop
  itemId === '' && setItemId(Item_Id);

  return (
    <div className='product_card'
      onClick={() => { navigate('/products/' + itemId) }}>
        <h4 className='title'>{props.Title}</h4>
        <img className="product_image" src={props.Img} alt='product_img' />
        <p className='price'>Price: ${props.Price}</p>
    </div>
  );
}

export default ProductCard;
