import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, CardImg,Row,Col,Button } from 'react-bootstrap';


export default function AddToCart() {

const { id } = useParams();
const [details, setDetails] = useState([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  axios
    .get(`https://dummyjson.com/products/${id}`)
    .then((response) => {
      console.log(response.data);
      if (typeof response.data==='object') {
        setDetails([...details,response.data]);
      }
      setIsLoading(false);
    })    
    .catch((error) => {
      console.log(error);
      setIsLoading(false);
    });
}, [id,details]);

console.log(details);   


const removeFromCart=(productId)=>{
  const updatedProducts=details.filter((item)=>item.id!==productId);
  setDetails(updatedProducts);
};

const clearCart=()=>{
  setDetails([]);
};

  return (
    <div>


{isLoading ? (
        <div>Loading...</div>
      ) : (
            <>
                <Row>
              <h1>Details:</h1>
              {Object.keys(details).length===0 ?(  <div>No details found.</div>):(
               <Col className='col-4' key={details[0].id}  >
                <Card className='p-2'>
                  <CardImg src={details[0].thumbnail} ></CardImg>
                  <Card.Title>{details[0].title}</Card.Title>
                  <Card.Text>{details[0].description}</Card.Text>
    
                 <Button onClick={()=>removeFromCart(details[0].id)}>Remove Cart</Button>
                <Button onClick={clearCart}>Clear Cart</Button>
                </Card>
                </Col>
              )}
                </Row>
              </>
)}
</div>
  );
}

 