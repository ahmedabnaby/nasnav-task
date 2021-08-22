
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
        <div>
            <Container fluid>
                <div className="upperNav">
                    <li className="sidebarBtn"><a href="#"><img src={process.env.PUBLIC_URL + 'images/sidebar.svg'} role="..."/></a></li>
                    <li className="logo"><img src={process.env.PUBLIC_URL + 'images/logo.svg'} role="..."/></li>
                    <li>
                        <div className="navText">
                        <img src={process.env.PUBLIC_URL + 'images/left-arrow.svg'} className="left-arrow" role="..."/>
                        <p>Valentine’s Day Offers! Buy Two Get One Free <a href="#"><span className="shopNow">Shop Now </span></a></p>
                        <img src={process.env.PUBLIC_URL + 'images/right-arrow.svg'} className="right-arrow" role="..."/>
                        </div> 
                    </li>
                </div>
            </Container>
        </div>
         );
    }
}
 
export default Home;