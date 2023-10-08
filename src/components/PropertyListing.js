
import React from 'react'
import {createContext, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './cart.css'
import MainImage from './MainImage';
import Footer from './Footer';
import Header from './Header';

export const NewCartContext = createContext([]);


function PropertyListing(props) {
  const { data } = props;

  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cartItems')) || []
  );
  

  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };

  const addToCart = (product) => {
    console.log('Adding to cart:', product);
    setCartItems((prevCartItems) => [...prevCartItems, product]);
    console.log(cartItems); // Check if the state is updated
  };
  


  return (
    <>
      <NewCartContext.Provider value={{cartItems}}>
        <Header />
      </NewCartContext.Provider>

      <MainImage />


      <div className="property-card">

        <div className='row'>
          {data.map((list) => (

            <div className="col-lg-4 col-md-6 col-sm-12" key={list.id} style={{ padding: '40px' }}>

              <Card className="propertyCard">
                <Card.Body className="CardBody" >
                <div className='img'>
                <img variant="top" src={list.thumbnail} alt={list.brand} height={200} width={370} />

                </div>

                  <h3 className='mt-4'>{list.title}</h3>
                  <p className='description'>{list.description}</p>

                  <h4 style={{backgroundColor:'#44b81b',fontFamily:'monospace', width:'55px', fontSize:'1em',color:'white',borderRadius:'5px',height:'35px',textAlign:'center',padding:'10px'}}>{list.discountPercentage.toFixed(0)}%</h4>

                  <h4 style={{color:'red',fontFamily:"initial",fontSize:'20px'}}>${list.price}</h4>

                  <p style={{color:'black',fontFamily:'cursive'}}><i className="bi bi-star-fill" style={{color:'#32cd32'}}></i> {list.rating}</p>

                </Card.Body>
        
                <div className="button-container">
                  <button className="addToCart" onClick={() => addToCart(list)}>
                  <i className="bi bi-cart-plus"></i>
                  </button>
                  <button className="details" onClick={() => handleClick(list.id)}>
                    Details
                  </button>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default PropertyListing;






