import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [news, setNews] = useState([]);
    const [contact, setContact] = useState([]);
    const setListProduct = () => {
        axios
            .get("http://127.0.0.1:8000/api/product/")
            .then(function (response) {
                setProducts(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(setListProduct, []);

    const setListNews = () => {
        axios
            .get("http://127.0.0.1:8000/api/news/")
            .then(function (response) {
                setNews(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(setListNews, []);

    const setListContact = () => {
        axios
            .get("http://127.0.0.1:8000/api/contact/")
            .then(function (response) {
                setContact(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(setListContact, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <div className="row">
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Product Total</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{products.length} -products</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-info shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">News Total</div>
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-auto">
                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{news.length} -news</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Contact Total</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{contact.length} -contacts</div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
