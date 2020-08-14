import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const ShowNewsCategory = () => {
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

    const deleteCategory = (id) => {
        axios
            .delete("http://127.0.0.1:8000/api/news-category/delete-news-category/" + id)
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
                    <Link to="/admin/add-news-category">
                        <button className="btn btn-primary">
                            Add News Category
            </button>
                    </Link>
                </button>

            </div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>#</th>
                        <th>Category Name</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="list_data">
                    {items.map((category, index) => (
                        <tr key={index}>
                            <th >{++index}</th>
                            <td>{category.category_name}</td>
                            <td>{category.created_at}</td>
                            <td>
                                <Link to={`edit-news-category/${category.id}`}>
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
                                            deleteCategory(category.id);
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

export default ShowNewsCategory
