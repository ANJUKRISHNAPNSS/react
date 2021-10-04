import React from "react";
import { connect } from "react-redux";
import Carousel from 'react-bootstrap/Carousel'
import emp from "../images/emp.jpg"
import R from "../images/R.png"
import em from "../images/em.jpg"
import bj from "../images/bj.jpg"
class home extends React.Component{
    empsize
    render(){
        return(
            
<Carousel>
  <Carousel.Item>
    <img
    //   className="empsize"
      src={emp}
      height="800px"
      width="100%"
    //   alt="First slide"
    />
    <Carousel.Caption>
      <h3>WELCOME TO EMPLOYEE MANAGEMENT SYSTEM</h3>
      <p>Enter you details and keep your details safe and secure</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    //   className="empsize"
      src={em}
      height="800px"
      width="100%"
    //   alt="First slide"
    />
    <Carousel.Caption>
      <h3>WELCOME TO EMPLOYEE MANAGEMENT SYSTEM</h3>
      <p>Enter you details and keep your details safe and secure</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={R}
      height="800px"
      width="100%"
    //   alt="Second slide"
    />
<Carousel.Caption>
      <h3>WELCOME TO EMPLOYEE MANAGEMENT SYSTEM</h3>
      <p>Enter you details and keep your details safe and secure</p>
    </Carousel.Caption>
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bj}
      height="800px"
      width="100%"
    //   alt="Second slide"
    />
    <Carousel.Caption>
      <h3>WELCOME TO EMPLOYEE MANAGEMENT SYSTEM</h3>
      <p>Enter you details and keep your details safe and secure</p>
    </Carousel.Caption>
    
  </Carousel.Item>
  {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    
  </Carousel.Item> */}
</Carousel>
        )
    }
}
export default home