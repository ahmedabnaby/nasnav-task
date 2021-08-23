

import React, { Component } from 'react';
import { CartProvider, useCart } from "react-use-cart";
import Sidebar from "react-sidebar";
import ImageComponent from "./ImageComponent";
import { Container, Row,Col } from 'react-bootstrap';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
          };
    }
    render() { 
    let count = this.state.count;
        return ( 


      <div className="product-single-container product-single-default">
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
            <span className="product-price">{this.props.products.price}</span>
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
              <input className="input-group-field" type="number" name="quantity" defaultValue="1"/>
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
    </div>
        )
    }
}
export default Home;
