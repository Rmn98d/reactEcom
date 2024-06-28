import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertyListing from './components/PropertyListing';
import NavigationHeading from './components/NavigationHeading';
import Header from './components/Header';
import Details from './components/Details';
import CartComponent from './components/CartComponent';
import axios from 'axios';


function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((response) => {
        console.log(response.data.products);
        setData(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Router>
  
     
        <Routes basename="/reactEcom">
          <Route exact path="/reactEcom" element={<PropertyListing data={data}/>} />
          <Route path="/reactEcom/contactUs" element={<NavigationHeading />} />
          <Route path="/reactEcom/details/:id" element={<Details />} />
          <Route path="/reactEcom/cart" element={<CartComponent />} />
          
          <Route path="/reactEcom/header" element={<Header/>}></Route>
          
        </Routes>
    
    </Router>
  );
}

export default App;


