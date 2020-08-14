import React, { Component } from 'react'
import Bg5 from '../../assets/client/img/bg-img/bg-5.jpg';

export default class Sale extends Component {
    render() {
        return (
            <div className="cta-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="cta-content bg-img background-overlay" style={{ backgroundImage: 'url(' + Bg5 + ')' }}>
                                <div className="h-100 d-flex align-items-center justify-content-end">
                                    <div className="cta--text">
                                        <h6>-60%</h6>
                                        <h2>Global Sale</h2>
                                        <a href="#" className="btn essence-btn">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
