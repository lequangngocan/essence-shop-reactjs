import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const ShowContact = () => {
    const [items, setItems] = useState([]);
    const setList = () => {
        axios
            .get("http://127.0.0.1:8000/api/contact/")
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
            .delete("http://127.0.0.1:8000/api/contact/delete-contact/" + id)
            .then(function (response) {
                setList();
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div className="table-responsive">
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>#</th>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Message</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="list_data">
                    {items.map((contact, index) => (
                        <tr key={index}>
                            <th >{++index}</th>
                            <td>{contact.name}</td>
                            <td>{contact.subject}</td>
                            <td>{contact.message}</td>
                            <td>{contact.created_at}</td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (
                                            window.confirm("Delete product ?")
                                        ) {
                                            deleteCategory(contact.id);
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

export default ShowContact
