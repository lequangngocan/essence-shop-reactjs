import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useParams } from "react-router-dom";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const EditNews = () => {
    let { id } = useParams();
    console.log(id);
    const [image, setImage] = useState('');
    const [single, setSingle] = useState('');
    const [content, setContent] = useState('');
    const { register, handleSubmit, watch, errors, setValue } = useForm();
    const [items, setItems] = useState([]);
    const setList = () => {
        axios
            .get("http://127.0.0.1:8000/api/news-category/")
            .then(function (response) {
                setItems(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(setList, []);

    const setSingleNews = () => {
        axios
            .get("http://127.0.0.1:8000/api/news/" + id)
            .then(function (response) {
                setSingle(response.data[0]);
                setValue('title', response.data[0].title)
                setValue('news_category_id', response.data[0].news_category_id)
                setImage(response.data[0].image)
                setContent(response.data[0].content)
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(setSingleNews, []);
    console.log(single);

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

    const onSubmit = data =>
        axios
            .post("http://127.0.0.1:8000/api/news/edit-news/" + id, data)
            .then(function (response) {
                window.location.pathname = "/admin/news";
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
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <input type="text" className="form-control" name="title" ref={register({ required: true, pattern: /^[A-Za-z0-9]/ })} />
                        {errors.title && <span style={{ color: "red" }} >This name is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="hidden" className="form-control" value={image} name="image" ref={register({ required: true })} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">News Category</label><br />
                        <select className="form-control" id="exampleFormControlSelect1" name="news_category_id" ref={register({ required: true })}>
                            {items.map((item) => (
                                <option value={item.id}>{item.category_name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Image</label><br />
                        <img src={image} name="image" /><br />
                        <input type="file" class="form-control-file" placeholder="Upload an image" ref={register({ required: true })} onChange={uploadImage} />
                        {errors.image && <span style={{ color: "red" }} >The image is required</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Content</label>
                        <input type="hidden" value={content} name="content" ref={register({ required: true })} />
                        <CKEditor
                            editor={ClassicEditor}
                            data={content}
                            onInit={editor => {
                                console.log('Editor is ready to use!', editor);
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setContent(data);
                                console.log(content);
                            }}
                            onBlur={(event, editor) => {
                                console.log('Blur.', editor);
                            }}
                            onFocus={(event, editor) => {
                                console.log('Focus.', editor);
                            }}
                        />
                        {errors.content && <span style={{ color: "red" }} >The content is required</span>}
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </div>
        </form>
    )
}

export default EditNews
