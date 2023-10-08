import { Button } from 'react-bootstrap';
import CartItem from './CartItem';
import {useContext } from 'react';
import {CartContext} from './CartComponent';
import './cart.css'

const ContextCart = ({onTotalItemChange }) => {
    
    
    const {items,ClearCart,totalAmount,dispatch,totalItem  } = useContext(CartContext);

    if(items.length===0){
     return (
      <>


<div className='mainCartSection p-5'>
<h1>Shopping Cart</h1>
<p className='total-items'>you have <span className='total-items-count'> 0 </span>items in shopping cart </p>
<div className='cart-items'>
<div className='cart-items-container p-5'>

  {items && items.map((currentItem)=>{
    return <CartItem key={currentItem.id} {...currentItem}/>
  })}
  
  

</div>
</div> 
</div> 
    </>
     )
    }


    const handleIncrement = (itemId) => {
      dispatch({ type: 'INCREMENT', payload: itemId });
      onTotalItemChange(totalItem + 1);
    };
  
    const handleDecrement = (itemId) => {
      dispatch({ type: 'DECREMENT', payload: itemId });
      onTotalItemChange(totalItem -1);
    };
  
    return (
      <>
      <div className='container cartSection'>
     
        <div className='mainCartSection p-5'>
          <h1>Shopping Cart</h1>
          <p className='total-items'>you have <span className='total-items-count'>{totalItem}</span> items in shopping cart </p>
          <div className='cart-items'>
            <div className='cart-items-container p-5'>

              {items && items.map((currentItem)=>{
                return <CartItem key={currentItem.id} {...currentItem} onIncrement={handleIncrement} onDecrement={handleDecrement}/>
              })}
              
              

            </div>
            <div className='card-total mb-5'>
              <h3>Cart Total: <span>{totalAmount}</span></h3>
              {/* <Button className='btn' >CheckOut</Button> */}
              <Button className='clear-cart' onClick={ClearCart}>ClearAll</Button>
            </div>
          </div>


        </div>
      </div>

   </>
  )
}

export default ContextCart;