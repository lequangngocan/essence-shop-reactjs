import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import parse from 'html-react-parser';

const ShowNews = () => {
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

    const deleteCategory = (id) => {
        axios
            .delete("http://127.0.0.1:8000/api/news/delete-news/" + id)
            .then(function (response) {
                setList();
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className="table-responsive">

            <div className="d-flex justify-content-end mb-2">
                <button type="button" className="btn btn-light">
                    <Link to="/admin/add-news">
                        <button className="btn btn-primary">
                            Add News
            </button>
                    </Link>
                </button>

            </div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Content</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="list_data">
                    {items.map((news, index) => (
                        <tr key={index}>
                            <th >{++index}</th>
                            <td width="250px">{news.title}</td>
                            <td><img src={news.image} width="200px" /></td>
                            <td>{news.category_name}</td>
                            <td>
                                <details><summary>Content</summary>{parse(news.content)}</details>
                            </td>
                            <td>{news.created_at}</td>
                            <td>
                                <Link to={`edit-news/${news.id}`}>
                                    <button type="button" className="btn btn-success">
                                        Edit
                  </button>
                                </Link>

                                <button
                                    type="button"
                                    onClick={() => {
                                        if (
                                            window.confirm("Delete product ?")
                                        ) {
                                            deleteCategory(news.id);
                                            alert("Deleted Successfully !")
                                        }
                                    }}
                                    className="btn btn-danger"
                                >
                                    Delete
                </button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default ShowNews
