
import React, { Component } from 'react';
import Sidebar from "react-sidebar";
import ImageComponent from "./ImageComponent";
import Navbar from "./Navbar";
import adidas from "../images/adidas1.png"
import adidas1 from "../images/adidas1x2.png"
import adidas2 from "../images/adidas2.png"
import adidas2x2 from "../images/adidas2x2.png"
import adidas3 from "../images/adidas3.png"
import adidas3x2 from "../images/adidas3x2.png"
import adidas4 from "../images/adidas4.png"
import adidas4x2 from "../images/adidas4x2.png"
import adidas5 from "../images/adidas5.png"
import adidas5x2 from "../images/adidas5x2.png"
import adidas6 from "../images/adidas6.png"
import adidas6x2 from "../images/adidas6x2.png"

import similar1x2 from "../images/similar1x2.png"
import similar2x2 from "../images/similar2x2.png"
import similar3x2 from "../images/similar3x2.png"
import similar4x2 from "../images/similar4x2.png"

import Product from "./Product";
import SimilarProducts from "./SimilarProducts";
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
      const products = {
        id:'1',
        name: "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        category: "Men",
        price: "9,999 LE",
        image1: adidas,
        image1x2: adidas1,
        image2: adidas2,
        image2x2: adidas2x2,  
        image3: adidas3,
        image3x2: adidas3x2,
        image4: adidas4,
        image4x2: adidas4x2,
        image5: adidas5,
        image5x2: adidas5x2,
        image6: adidas6,
        image6x2: adidas6x2,
      }
      const similar_products = [
        {id:'1',name: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', price: '49.99 LE',sale:'50%',location:'Genena Mall', from:'',to:'',in:'', image:similar1x2},
        {id:'2',name: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', price: '9.99 LE',sale:'' ,location:'Genena Mall', from:'UK',to:'Egypt',in:'10',image:similar2x2},
        {id:'3',name: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', price: '29.99 LE',sale:'30%' ,location:'Genena Mall', from:'',to:'',in:'',image:similar3x2},
        {id:'4',name: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', price: '99.99 LE',sale:'70%',location:'Genena Mall', from:'Egypt',to:'UK',in:'2', image:similar4x2}
      ];
        return ( 
        <div>
            <Container fluid>
             <Navbar/>
                <div className="first_row">
                     <div>
                     <form action="/">
                     <div className="input-container">
                     <img src={process.env.PUBLIC_URL + 'images/search.svg'} className="searchIcon" role="..."/>
                        <input className="searchField" type="text" placeholder="Search" />
                    </div>
                     </form>
                     </div>
                     <div>
                     <img src={process.env.PUBLIC_URL + 'images/adidas.svg'} className="adidasIcon" role="..."/>
                     </div>
                     <div>
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
                     </div>
                </div>
                <div className="second_row">
                     <div className="categories">
                        <ul>
                            <li className="men">Men</li>
                            <li className="women">Women</li>
                            <li className="uni">Unisex</li>
                            <li className="kids">Kids</li>
                            <li className="best">Best Sellers</li>
                            <li className="new">New Arrivals</li>
                            <li className="offers">Offers</li>
                        </ul>
                     </div>
                </div>
                <div className="third_row">
                     <div className="third_row_text">
                        <p>Men / Clothing / Tops / Adidas / Adidas Black T-Shirt</p>
                     </div>
                </div>

                <main className="main">

    <div className="container">

      {/* End .product-single-container */}
          <Product products={products}/>
          <SimilarProducts similar_products={similar_products}/>
      {/* End .products-section */}
    </div>
    {/* End .container */}
  </main>
  {/* End .main */}
            </Container>
        </div>
         );
    }
}
 
export default Home;