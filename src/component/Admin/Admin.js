import React from 'react';
import { Link } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';

const Admin = () => {
    return (
        <div className="container mt-5">
            <nav className="navbar navbar-light bg-light">
                <form className="container-fluid justify-content-center">
                    <Link to='/addProduct' className="btn btn-outline-success me-5" type="button">Add Product</Link>
                    <Link to='/editProduct' className="btn btn-outline-secondary" type="button">Edit Product</Link>
                </form>
            </nav>
            <div>
                 <AddProduct></AddProduct>
            </div>
        </div>
    );
};

export default Admin;