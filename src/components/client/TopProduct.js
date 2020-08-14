import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";

const TopProducts = () => {
    const [items, setItems] = useState([]);
    let limit = 4;
    const setList = () => {
        axios
            .get("http://127.0.0.1:8000/api/product/limit/" + limit)
            .then(function (response) {
                setItems(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(setList, []);

    return (
        <section className="new_arrivals_area section-padding-80 clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading text-center">
                            <h2>Popular Products</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {items.slice(0, 4).map((product) => (
                        <div className="col-3">
                            <div className="single-product-wrapper">
                                {/* Product Image */}
                                <div className="product-img">
                                    <img src={product.product_image_1} alt="" />
                                </div>
                                {/* Product Description */}
                                <div className="product-description">
                                    <Link to={`product-detail/${product.id}`}>
                                        <h6 style={{ textAlign: 'center' }}>{product.product_name}</h6>
                                    </Link>
                                    <p className="product-price">
                                        <b style={{ color: "red", paddingRight: "205px" }}>${product.sale_price}</b>
                                        <strike>${product.price}</strike>
                                    </p>
                                    {/* Hover Content */}
                                    <div className="hover-content">
                                        {/* Add to Cart */}
                                        <div className="add-to-cart-btn">
                                            <a href="#" className="btn essence-btn">Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopProducts;
