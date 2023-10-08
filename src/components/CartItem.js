import React from 'react';
import { useContext, useState } from 'react';
import { CartContext } from './CartComponent';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';

const CartItem = ({ id, thumbnail, category, title, price }) => {
  const { removeItem, incrementQuantity, decrementQuantity } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    incrementQuantity(id);
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      decrementQuantity(id);
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
   
      <div className='items-info row justify-content-center text-center'>
      
        <div className='product-img col'>
          <img src={thumbnail} alt='not found' />
        </div>
        <div className='title col'>
          <h4 style={{color:'black'}}>{title}</h4>
        </div>
        <div className='add-minus-quantity col p-3'>
          <FaMinus className="minus" onClick={handleDecrement} />
          <input
            type="number"
            placeholder=""
            style={{ width: '50px', textAlign: 'center' }}
            value={quantity}
            onChange={(e) => {
              const newQuantity = parseInt(e.target.value);
              if (!isNaN(newQuantity)) {
                setQuantity(newQuantity);
              }
            }}
          />
          <FaPlus className="plus" onClick={handleIncrement} />
        </div>
        <div className='price col p-3'>
          <h4 style={{color:'black'}}>$ {price}</h4>

        </div>
        <div className='remove-item col p-3'>
          <FaTrash className="trash" onClick={() => removeItem(id)} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
