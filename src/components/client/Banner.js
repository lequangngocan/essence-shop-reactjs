import React, { Component } from 'react';
import ImageBanner from '../../assets/client/img/bg-img/bg-1.jpg';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default class Banner extends Component {
    render() {
        return (
            <section className="welcome_area bg-img background-overlay" style={{ backgroundImage: 'url(' + ImageBanner + ')' }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="hero-content">
                                <h2>New Collection</h2>
                                <Link to="/shop" className="btn essence-btn">view collection</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
