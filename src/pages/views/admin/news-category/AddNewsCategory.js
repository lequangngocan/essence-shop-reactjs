import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const AddNewsCategory = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data =>
        axios
            .post("http://127.0.0.1:8000/api/news-category/add-news-category/", data)
            .then(function (response) {
                window.location.pathname = "/admin/news-category";
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    return (
        <div>
            <form method='POST' onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">News Category Name</label>
                            <input type="text" className="form-control" name="category_name" ref={register({ required: true, pattern: /^[A-Za-z0-9]/ })} />
                            {errors.category_name && <span style={{ color: "red" }} >This news category name is required</span>}
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default AddNewsCategory
