import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, CardImg, Row, Col } from 'react-bootstrap';
import Header from './Header'
import "./detail.css"

function Details() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const cartItems = []; 



  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        console.log(response.data);
       if(typeof response.data==="object"){
        setDetails([response.data]);
       }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setIsLoading(false);
      });
  }, [id,error]);

  console.log(details);

  return (
    <>
        <Header cartItems={cartItems}/>
    
  
    <div className='arrow'>
    <div className='continer'>
   <a href='/reactEcom'>
   <img src='/images/right-arrow.jpg' alt='not found' style={{float:'right',width:'30px',padding:'5px'}}/>
   </a>
    </div>
    </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Row className='row detail '>
            <h1 style={{ color:'rgb(26, 15, 46)',fontSize:'50px',fontWeight:'bold'}}>Details</h1>

            <Col className=" col-md-2 col-12 order-md-1 order-2 col">
            {details && details.map((detail) => (
  <Card className="p-2 sideImgs" key={detail.id}>
    <CardImg className="sideimg" src={detail.thumbnail} height={100} style={{width:'80px', margin:'15px 0 0 0 '}}/>
    <CardImg className="sideimg" src={detail.thumbnail} height={100} style={{width:'80px', margin:'15px 0 0 0 '}}/>
    <CardImg className="sideimg" src={detail.thumbnail} height={100} style={{width:'80px', margin:'15px 0 0 0 '}}/>
    <CardImg className="sideimg" src={detail.thumbnail} height={100} style={{width:'80px', margin:'15px 0 0 0 '}}/>


  </Card>
))}


            </Col> 


            <Col className=" col-md-4 col-12 d-none order-md-2 order-1 p-1 mainImgCol col">
            {details && details.map((detail) => (
  <Card className="p-2 imgCard" key={detail.id}>
    <CardImg className='mainImg' src={detail.thumbnail}/>

  </Card>
))}


            </Col> 

                <Col className=" col-md-6 col-12 order-md-3 order-3 content col">
            {details && details.map((detail) => (
  <Card className="contentCard" key={detail.id}>
   

    <Card.Title>{detail.title}</Card.Title>
    <Card.Text>
      {detail.description.length > 100 ? `${detail.description.substring(0, 140)}....` : detail.description}
    </Card.Text>
    <Card.Text>
    <b>Brand : </b>
    {detail.brand}
    </Card.Text>
    <Card.Text>
    <b>Stock : </b>

    {detail.stock}
    </Card.Text>
    <Card.Text style={{ color: 'green' }}>
      <b>Price: $</b>
        <strong>
        {detail.price}

        </strong>   
         </Card.Text>
   
    <Card.Text style={{ color: 'green' }}><strong>  {detail.rating} ★ </strong></Card.Text>
  </Card>
))}


            </Col>           
          </Row>

        </>
      )}
    </>
  );
}

export default Details;
