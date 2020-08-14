import React, { Component } from 'react';
import Brand1 from '../../assets/client/img/core-img/brand1.png';
import Brand2 from '../../assets/client/img/core-img/brand2.png';
import Brand3 from '../../assets/client/img/core-img/brand3.png';
import Brand4 from '../../assets/client/img/core-img/brand4.png';
import Brand5 from '../../assets/client/img/core-img/brand5.png';
import Brand6 from '../../assets/client/img/core-img/brand6.png';

export default class Brand extends Component {
    render() {
        return (
            <div className="brands-area d-flex align-items-center justify-content-between">
                {/* Brand Logo */}
                <div className="single-brands-logo">
                    <img src={Brand1} alt="" />
                </div>
                {/* Brand Logo */}
                <div className="single-brands-logo">
                    <img src={Brand2} alt="" />
                </div>
                {/* Brand Logo */}
                <div className="single-brands-logo">
                    <img src={Brand3} alt="" />
                </div>
                {/* Brand Logo */}
                <div className="single-brands-logo">
                    <img src={Brand4} alt="" />
                </div>
                {/* Brand Logo */}
                <div className="single-brands-logo">
                    <img src={Brand5} alt="" />
                </div>
                {/* Brand Logo */}
                <div className="single-brands-logo">
                    <img src={Brand6} alt="" />
                </div>
            </div>
        )
    }
}
