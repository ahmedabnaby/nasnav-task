
import React, { Component } from 'react';
import Sidebar from "react-sidebar";
class Navbar extends Component {
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
         );
    }
}
 
export default Navbar;