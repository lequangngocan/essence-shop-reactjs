import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import { BrowserRouter as Router, Link, useParams, useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom';

const ProductDetail = () => {
    let location = useLocation();
    const url = String(location.pathname);
    console.log(url);
    const url_new = url.split('/');
    console.log(url_new[2]);
    return (
        <div>

        </div>
    )
}

export default ProductDetail
