import React, { Component } from 'react';
import { TypeBold } from 'react-bootstrap-icons';
import v6 from '../../images/v6.png';
import v3 from '../../images/v3.png';
import v8 from '../../images/v8.jpg'

class Carousel extends Component {
    
    render() { 
        return (  
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col" >
                <img src={v6} className="d-block" alt=""/>
                </div>
                <div className="col">
                  <h3 style={{"margin-top":"200px","fontFamily":"-moz-initial"}}>SUV</h3>
                  <div class="sub-title" style={{"color" :"grey" ,"fontWeight":"bold"}}>Eco-friendly rides at pocket-friendly rates </div>
                 <p>
                 Fully air conditioned cars that you can share with others depending on your route and location.
                                    
                 </p>
                </div>
              </div>
             </div>
             </div>
            <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col">
                <img src={v3} classNameName="d-block" alt=""/>
                </div>
                <div className="col" > 
                  <h3 style={{"margin-top":"200px","fontFamily":"-moz-initial"}}><b>SEDAN</b></h3>
                  <div class="sub-title" style={{"color" :"grey" ,"fontWeight":"bold"}}>Small fares for short rides</div>
                 <p>
                  Compact yet comfortable AC cars that seat up to 3 people and give you great value for your money. Small fares for short rides.
                </p>
                </div>
              </div>
             </div>
            </div>
            <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col">
                <img src={v8} style={{"height":"434px" ,"width":"650px"}} className="d-block" alt=""/>
                </div>
                <div className="col" >
                  <h3 style={{"margin-top":"200px","fontFamily":"-moz-initial"}}><b>30-SEATER-BUS</b></h3>
                  <div class="sub-title" style={{"color" :"grey" ,"fontWeight":"bold"}}>Prime with free Wi-Fi and top drivers</div>
                 <p>
                 Top rated drivers, and a hand-picked fleet of the best bus with extra legroom and boot space.
                </p>
                </div>
              </div>
             </div>
            </div>
          </div>
          
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        );
    }
}
 
export default Carousel;