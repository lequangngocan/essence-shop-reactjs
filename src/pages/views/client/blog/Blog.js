import React, { Component, useState, useEffect } from 'react';
import Breadcumb from '../../../../assets/client/img/bg-img/breadcumb2.jpg';
import axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Blog = () => {
    const [items, setItems] = useState([]);
    const setList = () => {
        axios
            .get("http://127.0.0.1:8000/api/news/")
            .then(function (response) {
                setItems(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(setList, []);

    return (
        <div>
            {/* ##### Breadcumb Area Start ##### */}
            <div className="breadcumb_area breadcumb-style-two bg-img" style={{ backgroundImage: 'url(' + Breadcumb + ')' }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="page-title text-center">
                                <h2>Fashion Blog</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ##### Breadcumb Area End ##### */}
            {/* ##### Blog Wrapper Area Start ##### */}
            <div className="blog-wrapper section-padding-80">
                <div className="container">
                    <div className="row">
                        {/* Single Blog Area */}
                        {items.map((news, index) => (
                            <div className="col-12 col-lg-6">
                                <div className="single-blog-area mb-50">
                                    <img src={news.image} alt="" />
                                    {/* Post Title */}
                                    <div className="post-title">
                                        <a href="#">{news.title}</a>
                                    </div>
                                    {/* Hover Content */}
                                    <div className="hover-content">
                                        {/* Post Title */}
                                        <div className="hover-post-title">
                                            <Link to={`/blog-detail/${news.id}`}>{news.title}</Link>
                                        </div>
                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p> */}
                                        <Link to={`/blog-detail/${news.id}`}>Continue reading <i className="fa fa-angle-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* ##### Blog Wrapper Area End ##### */}
        </div>
    )
}

export default Blog
