import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import ImgBackground from '../../../../assets/client/img/bg-img/breadcumb.jpg';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const setListProducts = () => {
        axios
            .get("http://127.0.0.1:8000/api/product/")
            .then(function (response) {
                setProducts(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(setListProducts, []);

    const setListCategories = () => {
        axios
            .get("http://127.0.0.1:8000/api/category/")
            .then(function (response) {
                setCategories(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(setListCategories, []);

    console.log(products);
    console.log(categories);
    return (
        <div>
            {/* ##### Breadcumb Area Start ##### */}
            <div className="breadcumb_area bg-img" style={{ marginTop: '80px', backgroundImage: 'url(' + ImgBackground + ')' }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="page-title text-center">
                                <h2>dresses</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ##### Breadcumb Area End ##### */}
            {/* ##### Shop Grid Area Start ##### */}
            <section className="shop_grid_area section-padding-80">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="shop_sidebar_area">
                                {/* ##### Single Widget ##### */}
                                <div className="widget catagory mb-50">
                                    {/* Widget Title */}
                                    <h6 className="widget-title mb-30">Catagories</h6>
                                    {/*  Catagories  */}
                                    <div className="catagories-menu">
                                        <ul id="menu-content2" className="menu-content collapse show">
                                            {/* Single Item */}
                                            {categories.map((category, index) => (
                                                <li data-toggle="collapse" data-target="#clothing">
                                                    <a href="#">{category.category_name}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-9">
                            <div className="shop_grid_product_area">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="product-topbar d-flex align-items-center justify-content-between">
                                            {/* Total Products */}
                                            <div className="total-products">
                                                <p><span>{products.length}</span> products found</p>
                                            </div>
                                            {/* Sorting */}
                                            <div className="product-sorting d-flex">
                                                <p>Sort by:</p>
                                                <form action="#" method="get">
                                                    <select name="select" id="sortByselect">
                                                        <option value="value">Highest Rated</option>
                                                        <option value="value">Newest</option>
                                                        <option value="value">Price: $$ - $</option>
                                                        <option value="value">Price: $ - $$</option>
                                                    </select>
                                                    <input type="submit" className="d-none" defaultValue />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {/* Single Product */}
                                    {products.map((product, index) => (
                                        <div className="col-12 col-sm-6 col-lg-4">
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
                            {/* Pagination */}
                            {/* <nav aria-label="navigation">
                                <ul className="pagination mt-50 mb-70">
                                    <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-left" /></a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">...</a></li>
                                    <li className="page-item"><a className="page-link" href="#">21</a></li>
                                    <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-right" /></a>
                                    </li>
                                </ul>
                            </nav> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* ##### Shop Grid Area End ##### */}
        </div>
    )
}

export default withRouter(Shop)
