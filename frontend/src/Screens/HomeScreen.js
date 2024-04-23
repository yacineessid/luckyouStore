import React, { useEffect } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';
import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProducts } from "../actions/productActions";

const HomeScreen = ({match}) => {
  const keyword =  match.params.keyword
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    console.log(`products`, products);
    dispatch(listProducts(keyword))
  }, [dispatch , keyword])

  return (
    <>
  
      <div className="flex-sm-column" style={{display:"flex", justifyContent:"space-between", marginTop:"40px"}}>
      <h3 style={{color:'GrayText' ,marginTop:"120px" , lineHeight:'35px' }}>Get more Style with <br/> Luckyou accessories! </h3>
      <MDBCarousel>
      <MDBCarouselInner>
        <MDBCarouselItem itemId={0}>
          <MDBCarouselElement src= "https://images.unsplash.com/photo-1518912217224-3b1ae276c89e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=756&q=80"  style={{borderRadius:"5px" , height :'450px'}}   />   

        </MDBCarouselItem>
        <MDBCarouselItem itemId={1}>
          <MDBCarouselElement src="https://images.unsplash.com/photo-1450297166380-cabe503887e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80" style={{borderRadius:"5px" ,height :"450px"}} /> 

        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
          <MDBCarouselElement src=        "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" style={{borderRadius:"5px" ,height :"450px"}} />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </div>
    
      <br/>
       <h4 style={{ color:"GrayText" , marginTop:"20px"}}>Summer style </h4>
      {loading ? (
        <Loader/>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
