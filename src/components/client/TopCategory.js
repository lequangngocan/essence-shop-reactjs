import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

const TopCategory = () => {
    const [items, setItems] = useState([]);
    let limit = 3;
    const setList = () => {
        axios
            .get('http://127.0.0.1:8000/api/category/limit/' + limit)
            .then(function (response) {
                setItems(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(setList, []);
    return (
        <div className="top_catagory_area section-padding-80 clearfix">
            <div className="container">
                <div className="row justify-content-center">
                    {/* Single Catagory */}
                    {items.map((items, index) => (
                        < div className="col-12 col-sm-6 col-md-4" >
                            <div className="single_catagory_area d-flex align-items-center justify-content-center bg-img" style={{ backgroundImage: 'url(' + items.category_image + ')' }}>
                                <div className="catagory-content">
                                    <a href="#">{items.category_name}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default TopCategory;
