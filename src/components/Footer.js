import React, { Component } from 'react';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footer">
                        <div className="footer-text">
                            <img src="images/yellowLogo.svg" role="..."/>
                            <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.<br/><br/>
                            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dia <br/><br/>m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
                            </p>
                            <p style={{paddingTop:'25px'}}>
                            © 2021 yeshtery, all rights reserved.
                            </p>
                        </div>
                        <div className="footer_right">
                            <h1>Subscribe to our newsletter</h1>
                            <div className="subscribe_input">
                                <input type="text" className="subscribeField" placeholder="Enter Your Mail" />
                                <div className="subscribeBtn">
                                    <a href="#">Subscribe</a>
                                    <img src="images/subscribe.svg" role="..." className="subscribeIcon" />
                                </div>
                            </div>
                            <div className="row">
                            <div className="footerMenu">
                                <ul>
                                    <a href="#"><li>About Us</li></a>
                                    <a href="#"><li>Contact Us</li></a>
                                    <a href="#"><li>Track Order</li></a>
                                    <a href="#"><li>Terms & Conditions</li></a>
                                    <a href="#"><li>Privacy Policy</li></a>
                                    <a href="#"><li>Sell With Us</li></a>
                                    <a href="#"><li>Shipping And Returns</li></a>
                                </ul>
                                    <div className="logos">
                                        <img className="cash" src="images/cash.png" role="..." />
                                        <img className="visa" src="images/visa.png" role="..." />
                                        <img className="master" src="images/master.png" role="..." />
                                    </div>
                            </div>
                            <div className="footerMenu1">
                                <ul>
                                    <a href="#"><li><img src="images/fb.svg" /><span>/YESHTERY</span></li></a>
                                    <a href="#"><li><img src="images/ln.svg" /><span>/YESHTERY</span></li></a>
                                    <a href="#"><li><img src="images/instagram.svg" /><span>/YESHTERY</span></li></a>
                                    <a href="#"><li><img src="images/twitter.svg" /><span>/YESHTERY</span></li></a>
                                </ul>
                                <div className="poweredBy">
                                    <h1>Powered By</h1>
                                    <img src="images/nasnav.svg" className="nasnav" role="..." />
                                </div>
                            </div>
                            </div>
                        </div>
            </div>
         );
    }
}
 
export default Footer;