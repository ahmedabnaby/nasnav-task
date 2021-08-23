
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
        <h2 className="section-title">Similar Products</h2>
        <h3>You may like these products also</h3>
        <div className="products-slider owl-carousel owl-theme dots-top">
            {this.props.similar_products.map((product, i) => {
                return(
                <div className="row" key={product.id}>
                    <div className="col">
                        <div className="product_card">
                            <img src={product.image} style={{padding:"5px"}} role="..."/>
                            <div className="product_new_title">
                                <h1>{product.name}</h1>
                                <h2>{product.price}</h2>
                                <h3>{product.price}</h3>
                            </div>
                            {product.sale!==""?
                            <div>
                            <div className="yellowSale2">
                            {<span>{product.sale} Off</span>}
                            </div>
                            <div className="adidasSimilar">
                                <img src="images/adidas.svg" className="adidasLogoProducts" role="..."/>
                            </div>
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
                                {i===0 || i===2?
                                <div className="oneand3"> 
                                    <h1>Pickup From: <span style={{fontWeight:'bolder'}}>{product.location}</span></h1>
                                </div>
                                :
                                <div> 
                           <    div className="twoand4"> 
                                    <h1>From: <span style={{fontWeight:'bolder'}}>{product.from}</span> to: <span style={{fontWeight:'bolder'}}>{product.to}</span> In: <span style={{fontWeight:'bolder'}}>{product.in}</span> Days</h1>
                                </div>                            
                                </div>
                            }
                            </div>
                            : 
                            <div style={{position:'relative', top:'15px'}}>                          
                                <div className="adidasSimilar">
                                <img src="images/adidas.svg" className="adidasLogoProducts" role="..."/>
                                </div>
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
                                {i===0 || i===2?
                                <div className="oneand3"> 
                                    <h1>Pickup From: <span style={{fontWeight:'bolder'}}>{product.location}</span></h1>
                                </div>
                                :
                                <div> 
                           <    div className="twoand4"> 
                                    <h1>From: <span style={{fontWeight:'bolder'}}>{product.from}</span> to: <span style={{fontWeight:'bolder'}}>{product.to}</span> In: <span style={{fontWeight:'bolder'}}>{product.in}</span> Days</h1>
                                </div>                            
                                </div>
                            }
                            </div>
                        }
                        </div>
                    </div>
                </div>
          );
        })}
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