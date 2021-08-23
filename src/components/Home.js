
import React, { Component } from 'react';
import Sidebar from "react-sidebar";
import { Container, Row,Col } from 'react-bootstrap';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
          };
          this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }
    render() { 
        return ( 
        <div>
            <Container fluid>
                <div className="upperNav">
                <ul>
                <Sidebar
                    sidebar={
                    <ul>
                    <a href="#"><li className="logo-sidebar" style={{marginTop:'15px'}}><img src={process.env.PUBLIC_URL + 'images/logo.svg'} role="..."/></li></a>
                        <a href="#" style={{textDecoration:'none'}}>
                            <li style={{position:'relative', left:"-25px", top:'100px'}}>
                            <img src={process.env.PUBLIC_URL + 'images/phone.svg'} role="..."/>
                            <span style={{marginLeft:'5px', position:'relative', top:'-3px'}}>Contact Us</span>
                            </li>
                        </a>
                        <a href="#" style={{textDecoration:'none'}}>
                            <li style={{position:'relative', left:"-25px", top:'125px'}}>
                            <img src={process.env.PUBLIC_URL + 'images/track.svg'} role="..."/>
                            <span style={{marginLeft:'5px', position:'relative', top:'-3px'}}>Track Order</span>
                            </li>
                        </a>
                        <a href="#" style={{textDecoration:'none'}}>
                            <li style={{position:'relative', left:"-25px", top:'150px'}}>
                            <img src={process.env.PUBLIC_URL + 'images/location.svg'} role="..."/>
                            <span style={{marginLeft:'5px', position:'relative', top:'-3px'}}>Find A Store</span>
                            </li>
                        </a>
                    </ul>
                    }
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{ 
                        sidebar: { position:"fixed",background: "white"}
                     }}
                >
                    <li  onClick={() => this.onSetSidebarOpen(true)} className="sidebarBtn"><a href="#"><img src={process.env.PUBLIC_URL + 'images/sidebar.svg'} role="..."/></a></li>
                </Sidebar>
                    
                    <a href="#"><li className="logo"><img src={process.env.PUBLIC_URL + 'images/logo.svg'} role="..."/></li></a>
                    <li>
                        <div className="navText">
                        <img src={process.env.PUBLIC_URL + 'images/left-arrow.svg'} className="left-arrow" role="..."/>
                        <p>Valentine’s Day Offers! Buy Two Get One Free <a href="#"><span className="shopNow">Shop Now </span></a></p>
                        <img src={process.env.PUBLIC_URL + 'images/right-arrow.svg'} className="right-arrow" role="..."/>
                        </div> 
                    </li>
                    <ul className="menu">
                        <a href="#">
                            <li className="contactUs">
                            <img src={process.env.PUBLIC_URL + 'images/phone.svg'} role="..."/>
                            <span>Contact Us</span>
                            </li>
                        </a>
                        <a href="#">
                            <li className="track">
                            <img src={process.env.PUBLIC_URL + 'images/track.svg'} role="..."/>
                            <span>Track Order</span>
                            </li>
                        </a>
                        <a href="#">
                            <li className="location">
                            <img src={process.env.PUBLIC_URL + 'images/location.svg'} role="..."/>
                            <span>Find A Store</span>
                            </li>
                        </a>
                    </ul>
                    </ul>
                </div>
                <Row className="first_row">
                     <Col>
                     <form action="/">
                     <div className="input-container">
                     <img src={process.env.PUBLIC_URL + 'images/search.svg'} className="searchIcon" role="..."/>
                        <input className="searchField" type="text" placeholder="Search" />
                    </div>
                     </form>
                     </Col>
                     <Col>
                     <img src={process.env.PUBLIC_URL + 'images/adidas.svg'} className="adidasIcon" role="..."/>
                     </Col>
                     <Col>
                     <ul className="menu-row2">
                        <a href="#">
                            <li className="cart">
                            <img src={process.env.PUBLIC_URL + 'images/cart.svg'} role="..."/>
                            <span>Cart</span>
                            </li>
                        </a>
                        <a href="#">
                            <li className="heart">
                            <img src={process.env.PUBLIC_URL + 'images/heart.svg'} role="..."/>
                            <span>Wishlist</span>
                            </li>
                        </a>
                        <a href="#">
                            <li className="user">
                            <img src={process.env.PUBLIC_URL + 'images/user.svg'} role="..."/>
                            <span>Login</span>
                            </li>
                        </a>
                    </ul>
                     </Col>
                </Row>
            </Container>
        </div>
         );
    }
}
 
export default Home;