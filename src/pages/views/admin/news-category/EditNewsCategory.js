import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useParams } from "react-router-dom";

const EditNewsCategory = () => {
    let { id } = useParams();
    const { register, handleSubmit, watch, errors, setValue } = useForm();
    const [detail, setDetail] = useState({});
    const setList = () => {
        axios
            .get("http://127.0.0.1:8000/api/news-category/" + id)
            .then(function (response) {
                setDetail(response.data[0])
                setValue('category_name', response.data[0].category_name, {
                    shouldValidate: true,
                    shouldDirty: true
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(setList, []);

    const onSubmit = data =>
        axios
            .post("http://127.0.0.1:8000/api/news-category/edit-news-category/" + id, data)
            .then(function (response) {
                window.location.pathname = "/admin/news-category";
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    return (
        <form method='POST' onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Category Name</label>
                        <input type="text" className="form-control" name="category_name" ref={register({ required: true, pattern: /^[A-Za-z0-9]/ })} />
                        {errors.category_name && <span style={{ color: "red" }} >This name is required</span>}
                    </div>
                </div>
                <div className="col-12">
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Update
                    </button>
                </div>
            </div>
        </form>
    )
}

export default EditNewsCategory
