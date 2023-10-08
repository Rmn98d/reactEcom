import './cart.css';
import { reducer } from './reducer';
import { useEffect, useReducer } from 'react';

import { createContext } from 'react';
import ContextCart from './ContextCart';



export const CartContext = createContext();

const initialState = {
  items:[],
  totalAmount: 0,
  totalItem: 0,
};


export const CartComponent = ({cartItems }) => {


  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(cartItems );



  const ClearCart =()=>{
    return dispatch({type:"CLEAR_CART"});
  }

  const incrementQuantity = (id) =>{
    return dispatch({type:'INCREMENT', payload:id,})
  }

  const decrementQuantity =(id)=>{
    return dispatch({type:'DECREMENT', payload:id,})
  }

  useEffect(() => {
    if (cartItems ) {
      const itemsWithQuantity = cartItems.map((item) => ({
        ...item,
        quantity: 1,
      }));
      dispatch({ type: 'SET_INITIAL_STATE', payload: { items: itemsWithQuantity } });
    }
  }, [cartItems ]);
  

useEffect(()=>{
  dispatch({type:'GET_TOTAL'});
  console.log('awosome');
},[state.items]);


const removeItem = (id) => {
  // Remove the item from the state
  dispatch({
    type: 'REMOVE_ITEM',
    payload: id,
  });

  // Remove the item from local storage
  const updatedCartItems = state.items.filter((item) => item.id !== id);
  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
};


  return (
    <>
      <CartContext.Provider value={{ ...state, removeItem,ClearCart,incrementQuantity,decrementQuantity}}>
        <ContextCart />
      </CartContext.Provider>

   
    </>
  );
};

export default CartComponent;
