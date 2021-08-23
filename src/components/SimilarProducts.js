import React, { Component } from 'react';
import { CartProvider, useCart } from "react-use-cart";

class SimilarProducts extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 

        return (     
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
      </div> );
    }
}
 
export default SimilarProducts;