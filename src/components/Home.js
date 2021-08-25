
import React, { Component } from 'react';
import Sidebar from "react-sidebar";
import ImageComponent from "./ImageComponent";
import Navbar from "./Navbar";
import { Redirect } from "react-router-dom";

import similar1x2 from "../images/similar1x2.png"
import similar2x2 from "../images/similar2x2.png"
import similar3x2 from "../images/similar3x2.png"
import similar4x2 from "../images/similar4x2.png"

import SimilarProducts from "./SimilarProducts";
import { Container, Row,Col } from 'react-bootstrap';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          sidebarOpen: false,
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  removeItemFromBasket(itemId) {
    this.setState({count: 0});
  }
  render() { 
      let count = this.state.count;
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
                     <Sidebar
                      sidebar={            
                      <ul>
                       <li className="right-sidebar-heading" style={{marginTop:'15px'}}><h1>My Cart</h1></li>
                       {this.state.count === 0 ? 
                       <li className="right-sidebar-heading" style={{marginTop:'15px'}}><h1>Your Cart Is Empty.</h1></li>
                       :
                       <div>
                                <li style={{position:'relative', left:"30px", top:'100px', color:'black', fontWeight:"900", fontSize:'13px'}}>
                                <span style={{position:'relative', top:'-15px'}}>Cart Summary</span>
                                </li>
                                <li style={{position:'relative', left:"30px", top:'125px', color:'black', fontWeight:"700", fontSize:'13px'}}>
                                <img src={this.props.products.image1} className="cartImage" role="..."/>
                                <span className="cartName">{this.props.products.name}</span>
                                <span className="cartQty">Quantity: {this.state.count}</span>
                                <span className="cartPrice">{this.props.products.price} LE</span>
                                <span className="cartRemove"><a href="#" onClick={() => this.removeItemFromBasket(this.props.products.id)} className="remove">Remove</a></span>
                                <span className="cartTotal">Total : {this.props.products.price*this.state.count} LE</span>
                                </li>
                                <div className="cartBtns">
                                <div className="pick_up">
                                    <a href="#">Review Cart</a>
                                </div>
                                <div className="add_to_cart">
                                    <a href="#">Complete Checkout</a>
                                </div>
                                </div>
                            </div>
                      }

                        </ul>}
                      open={this.state.sidebarOpen}
                      onSetOpen={this.onSetSidebarOpen}
                      styles={{ 
                        sidebar: { position:"fixed",background: "white",zIndex:'9999'}
                     }}                      
                     sidebarClassName="sidebarCustom mobile"
                      pullRight
                    >
                            <a href="#" onClick={() => this.onSetSidebarOpen(true)}>
                              <div className="counter">
                                <span>{count}</span>
                              </div>
                            <li className="cart">
                            <img src={process.env.PUBLIC_URL + 'images/cart.svg'} role="..."/>
                            <span>Cart</span>
                            </li>
                        </a>
                    </Sidebar> 
                     <ul className="menu-row2">
                        {/* <a href="#">
                              <div className="counter">
                                <span>{count}</span>
                              </div>
                            <li className="cart">
                            <img src={process.env.PUBLIC_URL + 'images/cart.svg'} role="..."/>
                            <span>Cart</span>
                            </li>
                        </a> */}
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
                        <p>Men /Clothings/ Tops / Adidas / Adidas Black T-Shirt</p>
                     </div>
                </div>

                <main className="main">

    <div className="container">

      {/* End .product-single-container */}
      <div className="product-single-container">
      <div className="row">
        <div className="col-md-5 product-single-gallery">
          <div className="product-slider-container">
            <div className="product-single-carousel owl-carousel owl-theme">
              <div className="product-item">
                <img
                  className="product-single-image"
                  src={this.props.products.image1x2}
                />
              </div>
              <div className="product-item">
                <img
                  className="product-single-image"
                  src={this.props.products.image2x2}
                />
              </div>
              <div className="product-item">
                <img
                  className="product-single-image"
                  src={this.props.products.image3x2}
                />
              </div>
              <div className="product-item">
                <img
                  className="product-single-image"
                  src={this.props.products.image4x2}
                />
              </div>
            </div>
            {/* End .product-single-carousel */}
            <span className="prod-full-screen">
              <i className="icon-plus" />
            </span>
          </div>
          <div className="prod-thumbnail owl-dots" id="carousel-custom-dots">
            <div className="owl-dot">
            <ImageComponent url={this.props.products.image1}/>
            </div>
            <div className="owl-dot">
              <img src={this.props.products.image2} />
            </div>
            <div className="owl-dot">
              <img src={this.props.products.image3}  />
            </div>
            <div className="owl-dot">
              <img src={this.props.products.image4} />
            </div>
          </div>
        </div>
        {/* End .product-single-gallery */}
        <div className="col-md-7 product-single-details">
        <img src="images/adidas.svg" role="..." className="adidasLogoProducts"/>
          <h1 className="product-title">{this.props.products.name}</h1>
          <p>{this.props.products.category}</p>
          <div className="ratings-container">
            <div className="product-ratings">
              <span className="ratings" style={{ width: "60%" }} />
              {/* End .ratings */}
            </div>
            {/* End .product-ratings */}
            <a href="#" className="rating-link">
              4.9 of 5
            </a>
          </div>
          {/* End .ratings-container */}
          <hr className="short-divider" />
          <div className="price-box">
            <span className="product-price">{this.props.products.price}  LE</span>
            <span>9,999 LE</span>
            <div className="yellowSale">
            <span>30% Off</span>
            </div>
          </div>
          {/* End .price-box */}
          <div className="product-filters-container">
            <div className="product-single-filter mb-2">
              <h1 className="product-title1">Size</h1>
              <ul className="config-size-list">
                <li>
                  <a href="#"><span className="size-text">Small</span></a>
                </li>
                <li>
                  <a href="#"><span className="size-text">Medium</span></a>
                </li>
                <li className="active">
                  <a href="#"><span className="size-text">Large</span></a>
                </li>
                <li>
                  <a href="#"><span className="size-text">X Large</span></a>
                </li>
                <li>
                  <a href="#"><span className="size-text">XX Large</span></a>
                </li>
              </ul>
            </div>
            {/* End .product-single-filter */}
          </div>
          <div className="product-filters-container">
            <div className="product-single-filter mb-2">
              <h1 className="product-title1" style={{paddingTop:'55px'}}>Color</h1>
              <ul className="config-size-list">
                <li className="active">
                  <img style={{cursor:'pointer'}} className="color-image" src={this.props.products.image5}/>
                </li>
                <li>
                  <img style={{cursor:'pointer'}} className="color-image" src={this.props.products.image6}/>
                </li>
              </ul>
            </div>
            {/* End .product-single-filter */}
          </div>
          {/* End .product-filters-container */}
          <div className="quantity">
              <h1>Quantity</h1>
              <div className="quantity_input">
              <button type="button"  onClick={() => this.setState({ count: this.state.count - 1 })} className="button hollow circle" data-quantity="minus" data-field="quantity">
                  <i className="fa fa-minus" aria-hidden="true"></i>
              </button>
              <input className="input-group-field" type="number" name="quantity" defaultValue={this.state.count}/>
              <button type="button"  onClick={() => this.setState({ count: this.state.count + 1 })} className="button hollow circle" data-quantity="plus" data-field="quantity">
              <i className="fa fa-plus" aria-hidden="true"></i>
              </button>
              </div>
              <div className="row">
              <div className="add_to_cart">
                  <a href="#" onClick={() => this.setState({ count: this.state.count + 1 })}>Add To Cart</a>
              </div>
              <div className="pick_up">
                  <a href="#">Pickup From Store</a>
              </div>
              </div>
          </div>
          {/* End .product-action */}
        </div>
        {/* End .product-single-details */}
      </div>
      {/* End .row */}
    </div>          <SimilarProducts similar_products={similar_products}/>
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