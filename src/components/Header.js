import { useContext, useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import CartComponent from './CartComponent';
import './cart.css'
import { NewCartContext } from './PropertyListing';

function Header() {
  const { cartItems = [] } = useContext(NewCartContext);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [menuStyles, setMenuStyles] = useState({}); // State for menu styles

  useEffect(() => {
   
  const storedCartItem = localStorage.getItem(cartItemCount);
  if(storedCartItem){
    setCartItemCount(parseInt(storedCartItem));
  }else{
    setCartItemCount(cartItems.length);
  }
 
  },[cartItems,cartItemCount,]);

  const closeDropdown = (e) => {
    e.preventDefault();
    setMenuStyles({
      display:'none'
    });
  };
  const cart =(e)=>{
    e.preventDefault();
    setMenuStyles({
      display:'flex' ,

    });
  }

  useEffect(() => {
    localStorage.setItem('cartItemCount', cartItemCount.toString());
  }, [cartItemCount]);

  return (
    <>
      <div className='header'>
        <div className='row bg-dark '>
          <div className='col-1 mt-3 logoName'>
            <h4>Shop</h4>
          </div>
          <ul className='col-11'>

            <div className='row '>
              <div className='col-lg-9 col-sm-5 menu'>
              <div className='col-lg-1  col-sm-2 mt-2'>
                <li>
                  <a href='/contactUs'>ContactUs</a>
                </li>
              </div>
              <div className='col-lg-1 col-sm-2 mt-2'>
                <li>
                  <a href='/'>Home</a>
                </li>
              </div>
              <div className='col-lg-1 col-sm-2 dropdown'>
                <li>
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className="custom-toggle bg-dark" style={{ border: 'none' }}>
                    
                      <i className="bi bi-cart-fill" onClick={cart}> <span className="cart-item-count">{cartItemCount}</span></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='menu dropMenu' style={menuStyles}>
                    <a href='/#' className='closeMenu'><i onClick={closeDropdown} className='bi bi-x'></i></a>
                    <div className='cartSection' >
                    <CartComponent cartItems={cartItems} />

                    </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </div>
            </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header;
