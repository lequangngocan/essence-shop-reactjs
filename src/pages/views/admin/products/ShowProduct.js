import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';
import Pagination from "react-js-pagination";
import Paginative from '../../../../components/PaginationProducts';

const ShowProducts = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const setList = () => {
    axios
      .get("http://127.0.0.1:8000/api/product/")
      .then(function (response) {
        setItems(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(setList, []);
  console.log(items);

  const deleteProduct = (id) => {
    axios
      .delete("http://127.0.0.1:8000/api/product/delete-product/" + id)
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
          <Link to="/admin/add-product">
            <button className="btn btn-primary">
              Add Product
            </button>
          </Link>
        </button>

      </div>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>#</th>
            <th width="200px">Name</th>
            <th>Category</th>
            <th>Image</th>
            <th>Price</th>
            <th>Status</th>
            <th>Review</th>
            <th>Detail</th>
            <th>Created Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="list_data">
          {currentPosts.map((product, index) => (
            <tr key={index}>
              <th >{++index}</th>
              <td>{product.product_name}</td>
              <td>{product.category_name}</td>
              <td width="200px">
                <div className="single-product-wrapper">
                  <div className="product-img">
                    <img src={product.product_image_1} alt="" />
                    {/* Hover Thumb */}
                    <img className="hover-img" src={product.product_image_2} alt="" />
                  </div>
                </div>
              </td>
              <td>
                <h5 style={{ color: 'red' }}>${product.sale_price}</h5>
                <strike>${product.price}</strike>
              </td>
              <td>
                Quantity: {product.amount}<br />
                Views: {product.views}
              </td>
              <td><details><summary>Review</summary>{product.review}</details></td>
              <td><details><summary>Detail</summary>{parse(product.detail)}</details></td>
              <td>{product.created_at}</td>
              <td>
                <Link to={`edit-product/${product.id}`}>
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
                      deleteProduct(product.id);
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
      <Paginative
        postsPerPage={postsPerPage}
        totalPosts={items.length}
        paginate={paginate}
      />
    </div >
  );
};

export default ShowProducts;
