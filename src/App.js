import React, { Component } from 'react';
import Home from "./components/Home"
import Footer from "./components/Footer"
import adidas from "./images/adidas1.png"
import adidas1 from "./images/adidas1x2.png"
import adidas2 from "./images/adidas2.png"
import adidas2x2 from "./images/adidas2x2.png"
import adidas3 from "./images/adidas3.png"
import adidas3x2 from "./images/adidas3x2.png"
import adidas4 from "./images/adidas4.png"
import adidas4x2 from "./images/adidas4x2.png"
import adidas5 from "./images/adidas5.png"
import adidas5x2 from "./images/adidas5x2.png"
import adidas6 from "./images/adidas6.png"
import adidas6x2 from "./images/adidas6x2.png"
import './App.scss';

class App extends Component {

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
    return ( 
      <div>
        <Home products={products}/>
        <Footer/>
      </div>
     );
  }
}
 
export default App;