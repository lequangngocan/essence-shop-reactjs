import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Link, useParams, useLocation } from 'react-router-dom';

const SingleProduct = () => {
    // get id
    let location = useLocation();
    const url = String(location.pathname);
    console.log(url);
    const url_new = url.split('/');
    const id = url_new[2];
    console.log(id);

    const [detail, setDetail] = useState('');
    const setProduct = () => {
        axios
            .get("http://127.0.0.1:8000/api/product/" + id)
            .then(function (response) {
                setDetail(response.data[0]);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(setProduct, [id]);
    console.log(detail);

    const [items, setItems] = useState([]);
    let limit = 6;
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
        <div className="row" style={{ paddingTop: '100px' }}>
            <div className="col-4">
                {/* Single Product Thumb */}
                <div className="single-product-wrapper">
                    <div className="product-img">
                        <img src={detail.product_image_1} alt="" />
                        <img className="hover-img" alt="" src={detail.product_image_2} />
                    </div>
                </div>
            </div>
            {/* Single Product Description */}
            <div className="single_product_desc clearfix" style={{ paddingLeft: '100px' }}>
                <h1 style={{ color: '#dc0345' }}>
                    <h2>{detail.product_name}</h2>
                </h1>
                <h4 className="product-price">Price: <strike className="old-price">${detail.price}</strike><br /> Sale Price: ${detail.sale_price}</h4>
                <h4 className="product-desc">View: {detail.views}</h4>
                <h4 className="product-desc">{detail.review}</h4>
                <h4 className="product-desc">{parse(String(detail.detail))}</h4>
                <button type="submit" name="addtocart" value="5" class="btn essence-btn">Add to cart</button>
            </div>
            <div className="col-12" style={{ textAlign: 'center' }}>
                <h2>Product Relative</h2>
                <div className="row">
                    {/* Single Product */}
                    {items.map((product, index) => (
                        <div className="col-2">
                            <div className="single-product-wrapper">
                                <div className="product-img">
                                    <img alt="" src={product.product_image_1} />
                                    <img className="hover-img" alt="" src={product.product_image_2} />
                                    {/* <div className="product-badge offer-badge">
                                                        <span>-30%</span>
                                                    </div> */}
                                </div>
                                <div className="product-description">
                                    <span>topshop</span>
                                    <Link to={`/product-detail/${product.id}`}>
                                        <h6>{product.product_name}</h6>
                                    </Link>
                                    <p className="product-price"><span className="old-price">${product.price}</span> ${product.sale_price}</p>
                                    <div className="hover-content">
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
        </div>
    )
}

export default withRouter(SingleProduct)
