import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Children's Toys</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/orders" className="nav-link">Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin" className="nav-link">Admin</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Deals</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link bg-info text-white" tabindex="-1" aria-disabled="true">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;