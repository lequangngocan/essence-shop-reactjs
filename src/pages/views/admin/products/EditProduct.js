import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useParams } from "react-router-dom";

const EditProduct = () => {
  let { id } = useParams();
  console.log(id);
  const [image, setImage] = useState('');
  const [imageHover, setImageHover] = useState('');
  const [detail, setDetail] = useState('');
  const { register, handleSubmit, watch, errors } = useForm();
  const [items, setItems] = useState([]);
  const setList = () => {
    axios
      .get("http://127.0.0.1:8000/api/category/")
      .then(function (response) {
        setItems(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(setList, []);
  const uploadImage = e => {
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append("upload_preset", "react_image");
    formData.append("file", files);
    axios
      .post("https://api.cloudinary.com/v1_1/anlqn/image/upload", formData)
      .then(res => setImage(res.data.secure_url))
      .catch(err => console.log(err));
  }
  const uploadImageHover = e => {
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append("upload_preset", "react_image");
    formData.append("file", files);
    axios
      .post("https://api.cloudinary.com/v1_1/anlqn/image/upload", formData)
      .then(res => setImageHover(res.data.secure_url))
      .catch(err => console.log(err));
  }
  const onSubmit = data =>
    axios
      .post("http://127.0.0.1:8000/api/product/add-product", data)
      .then(function (response) {
        window.location.pathname = "/admin/product";
      })
      .catch(function (error) {
        console.log(error);
      });
  return (
    <form method='POST' onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Product Name</label>
            <input type="text" className="form-control" name="product_name" ref={register({ required: true, pattern: /^[A-Za-z0-9]/ })} />
            {errors.product_name && <span style={{ color: "red" }} >This name is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Category</label>
            <select className="form-control" id="exampleFormControlSelect1" name="categoryID" ref={register({ required: true })}>
              <option selected>Choose...</option>
              {items.map((item) => (
                <option value={item.id}>{item.category_name}</option>
              ))}
            </select>
            {errors.categoryID && <span style={{ color: "red" }} >This category is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Image</label><br />
            <input type="hidden" className="form-control" value={image} name="product_image_1" ref={register({ required: true })} />
            <img src={image} /><br />
            <input type="file" class="form-control-file" placeholder="Upload an image" ref={register({ required: true })} onChange={uploadImage} />
            {errors.product_image_1 && <span style={{ color: "red" }} >The image is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Image Hover</label><br />
            <input type="hidden" className="form-control" value={imageHover} name="product_image_2" ref={register({ required: true })} />
            <img src={imageHover} /><br />
            <input type="file" class="form-control-file" placeholder="Upload an image" ref={register({ required: true })} onChange={uploadImageHover} />
            {errors.product_image_2 && <span style={{ color: "red" }} >The image hover is required</span>}
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Quantity</label>
            <input type="number" className="form-control" name="amount" ref={register({ required: true, min: 1 })} />
            {errors.amount && <span style={{ color: "red" }} >This quantity is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Price</label>
            <input type="number" className="form-control" step="0.1" name="price" ref={register({ required: true, min: 1 })} />
            {errors.price && <span style={{ color: "red" }} >This price is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Sale Price</label>
            <input type="number" className="form-control" step="0.1" name="sale_price" ref={register({ required: true, min: 1 })} />
            {errors.sale_price && <span style={{ color: "red" }} >This sale price is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Review</label>
            <input type="text" className="form-control" name="review" ref={register({ required: true })} />
            {errors.review && <span style={{ color: "red" }} >This review is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Detail</label>
            <input type="hidden" value={detail} name="detail" ref={register({ required: true })} />
            <CKEditor
              editor={ClassicEditor}
              data=""
              onInit={editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setDetail(data);
                console.log(detail);
              }}
              onBlur={(event, editor) => {
                console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                console.log('Focus.', editor);
              }}
            />
            {errors.detail && <span style={{ color: "red" }} >This detail is required</span>}
          </div>
        </div>
        <div className="col-12">
          <button type="submit" class="btn btn-primary">Add</button>
        </div>
      </div>
    </form>
  )
}

export default EditProduct
