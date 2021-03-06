import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useParams } from "react-router-dom";

const EditCategory = () => {
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    let { id } = useParams();
    const { register, handleSubmit, watch, errors, setValue } = useForm();
    const [detail, setDetail] = useState({});
    const setList = () => {
        axios
            .get("http://127.0.0.1:8000/api/category/" + id)
            .then(function (response) {
                setDetail(response.data[0])
                setValue('category_name', response.data[0].category_name, {
                    shouldValidate: true,
                    shouldDirty: true
                })
                setValue('category_image', response.data[0].category_image, {
                    shouldValidate: true,
                    shouldDirty: true
                })
                setValue('describe', response.data[0].describe, {
                    shouldValidate: true,
                    shouldDirty: true
                })
                setImage(response.data[0].category_image)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(setList, []);
    const uploadImage = e => {
        const files = e.target.files[0];
        const formData = new FormData();
        formData.append("upload_preset", "react_image");
        formData.append("file", files);
        setLoading(true);
        axios
            .post("https://api.cloudinary.com/v1_1/anlqn/image/upload", formData)
            .then(res => setImage(res.data.secure_url))
            .then(setLoading(false))
            .catch(err => console.log(err));
    }

    const onSubmit = data =>
        axios
            .post("http://127.0.0.1:8000/api/category/edit-category/" + id, data)
            .then(function (response) {
                window.location.pathname = "/admin/product-category";
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
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Image</label>
                        <input type="hidden" name="category_image" value={image} ref={register({ required: true })} />
                        <p>
                            <img src={image} />
                        </p>
                        <input type="file" className="form-control" ref={register({ required: true })} onChange={uploadImage} />
                        {errors.category_image && <span style={{ color: "red" }} >The image is required</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Describe</label>
                        <input type="text" className="form-control" name="describe" ref={register({ required: true, minLength: 10 })} />
                        {errors.describe && <span style={{ color: "red" }} >The describe is required and min length is 10 characters</span>}
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

export default EditCategory
