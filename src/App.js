import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertyListing from './components/PropertyListing';
import Details from './components/Details';
import { CartComponent} from './components/CartComponent';
import axios from 'axios';
import NavigationHeading from './components/NavigationHeading';
import Header from './components/Header';

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
    {/* <Carousal/> */}
      {/* <Header/> */}
     
        <Routes>
          <Route exact path="/" element={<PropertyListing data={data}/>} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/cart" element={<CartComponent />} />
          <Route path="/contactUs"  element={<NavigationHeading/>} />
          <Route path="/header" element={<Header/>}></Route>
          
        </Routes>
    
    </Router>
  );
}

export default App;


