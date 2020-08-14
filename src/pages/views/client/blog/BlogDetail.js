import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import { BrowserRouter as Router, Link, useParams } from 'react-router-dom';

const BlogDetail = () => {
    let { id } = useParams();
    const [detail, setDetail] = useState('');
    const setBlog = () => {
        axios
            .get("http://127.0.0.1:8000/api/news/" + id)
            .then(function (response) {
                setDetail(response.data[0]);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(setBlog, []);
    const content = String(detail.content);

    const [items, setItems] = useState([]);
    const setList = () => {
        axios
            .get("http://127.0.0.1:8000/api/news/")
            .then(function (response) {
                setItems(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(setList, []);
    return (
        <div className="single-blog-wrapper">
            {/* Single Blog Post Thumb */}
            <div className="single-blog-post-thumb">
                <img src={detail.image} alt="" width='100%' />
            </div>
            {/* Single Blog Content Wrap */}
            <div className="single-blog-content-wrapper d-flex">
                {/* Blog Content */}
                <div className="single-blog--text">
                    <h2><b>{detail.title}</b></h2><span>Post time: {detail.created_at}</span>
                    <p>{parse(content)}</p>
                </div>
                {/* Related Blog Post */}
                <div className="related-blog-post">
                    {/* Single Related Blog Post */}
                    {items.map((news, index) => (
                        <div className="single-related-blog-post">
                            <img src={news.image} alt="" />
                            <Link to={`/blog-detail/${news.id}`}>
                                <h5>{news.title}</h5>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogDetail
