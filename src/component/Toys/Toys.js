import React from 'react';
import { useHistory } from 'react-router';
import './Toys.css';

const Toys = (props) => {
    const {name, price, imageURL, _id} = props.event;
    const history = useHistory();

    const handleClick = (checkOutId) => {
        const url = `/checkOut/${checkOutId}`
        history.push(url);
    }
    return (
        <div className="container toy-img">
            <div className="card rounded shadow p-3 mb-5 bg-body" style={{width: "18rem"}}>
                <img src={imageURL} className="card-img-top" alt="..."></img>
                    <div className="card-body text-center">
                        <h4 className="card-title">{name}</h4>
                        <div className="d-flex justify-content-between">
                            <h5 className="card-text">Price: ${price}</h5>
                            <button className="btn btn-primary" onClick={() => handleClick(_id)}>Buy Now</button>
                        </div>
                    </div>
            </div>  

        </div>
    );
};

export default Toys;