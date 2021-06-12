import React, { Component } from 'react';
//import Footer from "./footer";
import Navbar from "./navbar";
import Carousel from './carousel';
import Icons from './icons'
import v10 from '../../images/v10.jpg'
import Card from './card';

class VehicleHomePage extends Component{
   
    render() { 
        return (  
            <div style={{"backgroundColor":"#ebe8e8"}}>
                <Navbar />
                <div>
                <img src={v10} style={{"width":"100%", "height":"500px","opacity":"0.9"}} alt=""/>
                <div class="centered" style={{"fontFamily":"-moz-initial"}}> <h1>RIDE UNLIMITED,FOR FIXED A PRICE</h1>
                 <h3> Enjoy your ride with us</h3></div>
                </div>
                <br/>
                <br/>
                <div style={{"width":"100%"}}><Card/></div>
                <br/>
                <br/>
                
                <Icons/>
                <hr className="solid" sytle={{"border-top": "3px solid #bbb","margin-left":"5px"}}></hr>
                <Carousel/>
            
            </div>

        );
    }
}
 
export default VehicleHomePage;