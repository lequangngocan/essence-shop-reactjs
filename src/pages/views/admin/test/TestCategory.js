import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const TestCategory = () => {
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm();
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
            .post("http://127.0.0.1:8000/api/category/add-category/", data)
            .then(function (response) {
                window.location.pathname = "/admin/category";
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
                            <label htmlFor="exampleInputEmail1">Category Name</label>
                            <input type="text" className="form-control" name="category_name" ref={register({ required: true, pattern: /^[A-Za-z0-9]/ })} />
                            {errors.category_name && <span style={{ color: "red" }} >This name is required</span>}
                        </div>
                        <div className="form-group">
                            <input type="hidden" className="form-control" value={image} name="category_image" ref={register({ required: true })} />
                            {errors.category_image && <span style={{ color: "red" }} >This image is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Category Image</label><br />
                            <img src={image} /><br />
                            <input type="file" className="form-control" placeholder="Upload an image" ref={register({ required: true })} onChange={uploadImage} />
                            {errors.image && <span style={{ color: "red" }} >The image is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Describe</label>
                            <input type="text" className="form-control" name="describe" ref={register({ required: true, minLength: 5 })} />
                            {errors.describe && <span style={{ color: "red" }} >This describe is required and min length is 5 characters</span>}
                        </div>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TestCategory
