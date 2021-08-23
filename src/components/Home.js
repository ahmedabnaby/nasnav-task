
import React, { Component } from 'react';
import Sidebar from "react-sidebar";
import ImageComponent from "./ImageComponent";
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
                            <li style={{position:'relative', left:"30px", top:'100px', color:'black', fontWeight:"700", fontSize:'13px'}}>
                            <img src={process.env.PUBLIC_URL + 'images/phone.svg'} role="..."/>
                            <span style={{marginLeft:'25px', position:'relative', top:'-15px'}}>Contact Us</span>
                            </li>
                        </a>
                        <a href="#" style={{textDecoration:'none'}}>
                            <li style={{position:'relative', left:"30px", top:'125px', color:'black', fontWeight:"700", fontSize:'13px'}}>
                            <img src={process.env.PUBLIC_URL + 'images/track.svg'} role="..."/>
                            <span style={{marginLeft:'25px', position:'relative', top:'-15px'}}>Track Order</span>
                            </li>
                        </a>
                        <a href="#" style={{textDecoration:'none'}}>
                            <li style={{position:'relative', left:"30px", top:'150px', color:'black', fontWeight:"700", fontSize:'13px'}}>
                            <img src={process.env.PUBLIC_URL + 'images/location.svg'} role="..."/>
                            <span style={{marginLeft:'25px', position:'relative', top:'-15px'}}>Find A Store</span>
                            </li>
                        </a>
                    </ul>
                    }
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    sidebarClassName="sidebarCustom"
                    styles={{ 
                        sidebar: { position:"fixed",background: "white",zIndex:'9999'}
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
      <div className="product-single-container product-single-default">
        <div className="row">
          <div className="col-md-5 product-single-gallery">
            <div className="product-slider-container">
              <div className="product-single-carousel owl-carousel owl-theme">
                <div className="product-item">
                  <img
                    className="product-single-image"
                    src={this.props.products.image1x2}
                    data-zoom-image={this.props.products.image1x2}
                  />
                </div>
                <div className="product-item">
                  <img
                    className="product-single-image"
                    src={this.props.products.image2x2}
                    data-zoom-image={this.props.products.image2x2}
                  />
                </div>
                <div className="product-item">
                  <img
                    className="product-single-image"
                    src={this.props.products.image3x2}
                    data-zoom-image={this.props.products.image3x2}
                  />
                </div>
                <div className="product-item">
                  <img
                    className="product-single-image"
                    src={this.props.products.image4x2}
                    data-zoom-image={this.props.products.image4x2}
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
                <button type="button" className="button hollow circle" data-quantity="minus" data-field="quantity">
                    <i className="fa fa-minus" aria-hidden="true"></i>
                </button>
                <input className="input-group-field" type="number" name="quantity" defaultValue="1"/>
                <button type="button" className="button hollow circle" data-quantity="plus" data-field="quantity">
                <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
                </div>
                <div className="row">
                <div className="add_to_cart">
                    <a href="#">Add To Cart</a>
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
      {/* End .product-single-container */}

      <div className="products-section">
        <h2 className="section-title">Related Products</h2>
        <div className="products-slider owl-carousel owl-theme dots-top">
          <div className="product-default inner-quickview inner-icon">
            <figure>
              <a href="product.html">
                <img src="images/products/product-14.jpg" />
              </a>
              <div className="label-group">
                <span className="product-label label-sale">-20%</span>
              </div>
              <div className="btn-icon-group">
                <button
                  className="btn-icon btn-add-cart"
                  data-toggle="modal"
                  data-target="#addCartModal"
                >
                  <i className="icon-shopping-cart" />
                </button>
              </div>
              <a
                href="ajax/product-quick-view.html"
                className="btn-quickview"
                title="Quick View"
              >
                Quick View
              </a>
            </figure>
            <div className="product-details">
              <div className="category-wrap">
                <div className="category-list">
                  <a href="category.html" className="product-category">
                    category
                  </a>
                </div>
              </div>
              <h3 className="product-title">
                <a href="product.html">Product Short Name</a>
              </h3>
              <div className="ratings-container">
                <div className="product-ratings">
                  <span className="ratings" style={{ width: "100%" }} />
                  {/* End .ratings */}
                  <span className="tooltiptext tooltip-top" />
                </div>
                {/* End .product-ratings */}
              </div>
              {/* End .ratings-container */}
              <div className="price-box">
                <span className="old-price">$59.00</span>
                <span className="product-price">$49.00</span>
              </div>
              {/* End .price-box */}
            </div>
            {/* End .product-details */}
          </div>
          <div className="product-default inner-quickview inner-icon">
            <figure>
              <a href="product.html">
                <img src="images/products/product-13.jpg" />
              </a>
              <div className="btn-icon-group">
                <button
                  className="btn-icon btn-add-cart"
                  data-toggle="modal"
                  data-target="#addCartModal"
                >
                  <i className="icon-shopping-cart" />
                </button>
              </div>
              <a
                href="ajax/product-quick-view.html"
                className="btn-quickview"
                title="Quick View"
              >
                Quick View
              </a>
            </figure>
            <div className="product-details">
              <div className="category-wrap">
                <div className="category-list">
                  <a href="category.html" className="product-category">
                    category
                  </a>
                </div>
              </div>
              <h3 className="product-title">
                <a href="product.html">Product Short Name</a>
              </h3>
              <div className="ratings-container">
                <div className="product-ratings">
                  <span className="ratings" style={{ width: "100%" }} />
                  {/* End .ratings */}
                  <span className="tooltiptext tooltip-top" />
                </div>
                {/* End .product-ratings */}
              </div>
              {/* End .ratings-container */}
              <div className="price-box">
                <span className="old-price">$59.00</span>
                <span className="product-price">$49.00</span>
              </div>
              {/* End .price-box */}
            </div>
            {/* End .product-details */}
          </div>
          <div className="product-default inner-quickview inner-icon">
            <figure>
              <a href="product.html">
                <img src="images/products/product-12.jpg" />
              </a>
              <div className="btn-icon-group">
                <button
                  className="btn-icon btn-add-cart"
                  data-toggle="modal"
                  data-target="#addCartModal"
                >
                  <i className="icon-shopping-cart" />
                </button>
              </div>
              <a
                href="ajax/product-quick-view.html"
                className="btn-quickview"
                title="Quick View"
              >
                Quick View
              </a>
            </figure>
            <div className="product-details">
              <div className="category-wrap">
                <div className="category-list">
                  <a href="category.html" className="product-category">
                    category
                  </a>
                </div>
              </div>
              <h3 className="product-title">
                <a href="product.html">Product Short Name</a>
              </h3>
              <div className="ratings-container">
                <div className="product-ratings">
                  <span className="ratings" style={{ width: "100%" }} />
                  {/* End .ratings */}
                  <span className="tooltiptext tooltip-top" />
                </div>
                {/* End .product-ratings */}
              </div>
              {/* End .ratings-container */}
              <div className="price-box">
                <span className="old-price">$59.00</span>
                <span className="product-price">$49.00</span>
              </div>
              {/* End .price-box */}
            </div>
            {/* End .product-details */}
          </div>
          <div className="product-default inner-quickview inner-icon">
            <figure>
              <a href="product.html">
                <img src="images/products/product-11.jpg" />
              </a>
              <div className="label-group">
                <span className="product-label label-hot">HOT</span>
              </div>
              <div className="btn-icon-group">
                <button
                  className="btn-icon btn-add-cart"
                  data-toggle="modal"
                  data-target="#addCartModal"
                >
                  <i className="icon-shopping-cart" />
                </button>
              </div>
              <a
                href="ajax/product-quick-view.html"
                className="btn-quickview"
                title="Quick View"
              >
                Quick View
              </a>
            </figure>
            <div className="product-details">
              <div className="category-wrap">
                <div className="category-list">
                  <a href="category.html" className="product-category">
                    category
                  </a>
                </div>
              </div>
              <h3 className="product-title">
                <a href="product.html">Product Short Name</a>
              </h3>
              <div className="ratings-container">
                <div className="product-ratings">
                  <span className="ratings" style={{ width: "100%" }} />
                  {/* End .ratings */}
                  <span className="tooltiptext tooltip-top" />
                </div>
                {/* End .product-ratings */}
              </div>
              {/* End .ratings-container */}
              <div className="price-box">
                <span className="old-price">$59.00</span>
                <span className="product-price">$49.00</span>
              </div>
              {/* End .price-box */}
            </div>
            {/* End .product-details */}
          </div>
          <div className="product-default inner-quickview inner-icon">
            <figure>
              <a href="product.html">
                <img src="images/products/product-10.jpg" />
              </a>
              <div className="label-group">
                <span className="product-label label-hot">HOT</span>
              </div>
              <div className="btn-icon-group">
                <button
                  className="btn-icon btn-add-cart"
                  data-toggle="modal"
                  data-target="#addCartModal"
                >
                  <i className="icon-shopping-cart" />
                </button>
              </div>
              <a
                href="ajax/product-quick-view.html"
                className="btn-quickview"
                title="Quick View"
              >
                Quick View
              </a>
            </figure>
            <div className="product-details">
              <div className="category-wrap">
                <div className="category-list">
                  <a href="category.html" className="product-category">
                    category
                  </a>
                </div>
              </div>
              <h3 className="product-title">
                <a href="product.html">Product Short Name</a>
              </h3>
              <div className="ratings-container">
                <div className="product-ratings">
                  <span className="ratings" style={{ width: "100%" }} />
                  {/* End .ratings */}
                  <span className="tooltiptext tooltip-top" />
                </div>
                {/* End .product-ratings */}
              </div>
              {/* End .ratings-container */}
              <div className="price-box">
                <span className="old-price">$59.00</span>
                <span className="product-price">$49.00</span>
              </div>
              {/* End .price-box */}
            </div>
            {/* End .product-details */}
          </div>
          <div className="product-default inner-quickview inner-icon">
            <figure>
              <a href="product.html">
                <img src="images/products/product-9.jpg" />
              </a>
              <div className="label-group">
                <span className="product-label label-sale">-30%</span>
              </div>
              <div className="btn-icon-group">
                <button
                  className="btn-icon btn-add-cart"
                  data-toggle="modal"
                  data-target="#addCartModal"
                >
                  <i className="icon-shopping-cart" />
                </button>
              </div>
              <a
                href="ajax/product-quick-view.html"
                className="btn-quickview"
                title="Quick View"
              >
                Quick View
              </a>
            </figure>
            <div className="product-details">
              <div className="category-wrap">
                <div className="category-list">
                  <a href="category.html" className="product-category">
                    category
                  </a>
                </div>
              </div>
              <h3 className="product-title">
                <a href="product.html">Product Short Name</a>
              </h3>
              <div className="ratings-container">
                <div className="product-ratings">
                  <span className="ratings" style={{ width: "100%" }} />
                  {/* End .ratings */}
                  <span className="tooltiptext tooltip-top" />
                </div>
                {/* End .product-ratings */}
              </div>
              {/* End .ratings-container */}
              <div className="price-box">
                <span className="old-price">$59.00</span>
                <span className="product-price">$49.00</span>
              </div>
              {/* End .price-box */}
            </div>
            {/* End .product-details */}
          </div>
          <div className="product-default inner-quickview inner-icon">
            <figure>
              <a href="product.html">
                <img src="images/products/product-8.jpg" />
              </a>
              <div className="label-group">
                <span className="product-label label-sale">-20%</span>
              </div>
              <div className="btn-icon-group">
                <button
                  className="btn-icon btn-add-cart"
                  data-toggle="modal"
                  data-target="#addCartModal"
                >
                  <i className="icon-shopping-cart" />
                </button>
              </div>
              <a
                href="ajax/product-quick-view.html"
                className="btn-quickview"
                title="Quick View"
              >
                Quick View
              </a>
            </figure>
            <div className="product-details">
              <div className="category-wrap">
                <div className="category-list">
                  <a href="category.html" className="product-category">
                    category
                  </a>
                </div>
              </div>
              <h3 className="product-title">
                <a href="product.html">Product Short Name</a>
              </h3>
              <div className="ratings-container">
                <div className="product-ratings">
                  <span className="ratings" style={{ width: "100%" }} />
                  {/* End .ratings */}
                  <span className="tooltiptext tooltip-top" />
                </div>
                {/* End .product-ratings */}
              </div>
              {/* End .ratings-container */}
              <div className="price-box">
                <span className="old-price">$59.00</span>
                <span className="product-price">$49.00</span>
              </div>
              {/* End .price-box */}
            </div>
            {/* End .product-details */}
          </div>
        </div>
        {/* End .products-slider */}
      </div>
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