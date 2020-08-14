import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const About = () => {
    const [items, setItems] = useState([]);
    const setList = () => {
        axios
            .get("http://127.0.0.1:8000/api/about/")
            .then(function (response) {
                setItems(response.data[0]);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(setList, []);
    return (
        <div className="contact-area d-flex align-items-center" style={{ paddingTop: "40px" }}>
            <div className="google-map" >
                <img src={items.image} />
            </div>
            <div className="contact-info">
                <h2>About Us</h2>
                <p>{items.about}</p>
                <div className="contact-address mt-50">
                    <p><span>address:</span>{items.address} </p>
                    <p><span>telephone:</span> (+84) {items.phone_number}</p>
                    <p style={{ marginTop: 0 }}><span>email:</span><a href="mailto:lequangngocan@gmail.com">{items.email}</a></p>
                </div>
            </div>
        </div>
    )
}

export default About
