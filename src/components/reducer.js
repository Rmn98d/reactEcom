

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_INITIAL_STATE':
     const itemWithQuantity = action.payload.items.map((item)=>({
      ...item,
      quantity:1,
     }));
       return{
        ...state,
   items:itemWithQuantity,
       };
    case 'REMOVE_ITEM':
      const idToRemove = action.payload;
      const updatedItems = state.items.filter((currEle) => currEle.id !== idToRemove);
      return {
        ...state,
        items: updatedItems,
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'INCREMENT':
      const idToIncrement = action.payload;
      const updatedItemIncrement = state.items.map((item) => {
        if (item.id === idToIncrement) {
          if(typeof item.price=== 'number'){
            return {
              ...item,
              quantity: item.quantity + 1,
            };  
          }
        
        }
        return item;
      });
      return {
        ...state,
        items: updatedItemIncrement,
      };
    case 'DECREMENT':
      const idToDecrement = action.payload;
      const updatedItemDecrement = state.items.map((item) => {
        if (item.id === idToDecrement) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
      return {
        ...state,
        items: updatedItemDecrement,
      };
      
      case 'GET_TOTAL':
        let { totalItem, totalAmount } = state.items.reduce(
          (accum, curVal) => {
            let { quantity, price } = curVal;
            console.log(`Quantity: ${quantity}, Price: ${price}`);

            if(typeof quantity === 'number' && typeof price==='number'){
              accum.totalItem += quantity;
              accum.totalAmount += quantity *price;
            }
            
            return accum;
          },
          {
            totalItem: 0,
            totalAmount: 0,
          }
        );
        console.log(`Total Item: ${totalItem}, Total Amount: ${totalAmount}`);
        return {
          ...state,
          totalItem,
          totalAmount,
          
        };
      
          default:
            return state;
        }

      };
        
