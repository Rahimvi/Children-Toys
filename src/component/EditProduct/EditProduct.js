import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditEvent from '../EditEvent/EditEvent';

const EditProduct = () => {
    const [editProduct, setEditProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/events')
        .then(res => res.json())
        .then(data => setEditProduct(data))
    })
    return (
        <div className="container mt-5">
            <nav className="navbar navbar-light bg-light">
                <form className="container-fluid justify-content-center">
                    <Link to='/addProduct' className="btn btn-outline-success me-5" type="button">Add Product</Link>
                    <Link to='/editProduct' className="btn btn-outline-secondary" type="button">Edit Product</Link>
                </form>
            </nav>
            {
                editProduct.map(edit => <EditEvent key={edit._id} editEvent={edit}></EditEvent>)
            }
        </div>
    );
};

export default EditProduct;