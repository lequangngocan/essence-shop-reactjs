import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const ShowCategories = () => {
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

    const deleteCategory = (id) => {
        axios
            .delete("http://127.0.0.1:8000/api/category/delete-category/" + id)
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
                    <Link to="/admin/add-product-category">
                        <button className="btn btn-primary">
                            Add Product Category
            </button>
                    </Link>
                </button>

            </div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>#</th>
                        <th>Category Name</th>
                        <th>Category Image</th>
                        <th>Describe</th>
                        <th>Product Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="list_data">
                    {items.map((category, index) => (
                        <tr key={index}>
                            <th >{++index}</th>
                            <td>{category.category_name}</td>
                            <td><img src={category.category_image} width="100px" /></td>
                            <td>{category.describe}</td>
                            <td>{category.slsp}  </td>
                            <td>
                                <Link to={`edit-product-category/${category.id}`}>
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

export default ShowCategories
