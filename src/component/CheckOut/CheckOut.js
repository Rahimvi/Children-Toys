import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const CheckOut = () => {
    const { checkOutId } = useParams();
    const [product, setProduct] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleCheckOut = () => {
        const checkOut = new Date;
        const newCheckOut = {...loggedInUser, product, checkOut};
        fetch('https://pumpkin-cupcake-55925.herokuapp.com/addOrder', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newCheckOut)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    useEffect(() => {
        fetch('https://pumpkin-cupcake-55925.herokuapp.com/event/'+checkOutId)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[checkOutId])
    return (
        <div className="container mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{product.name}</td>
                        <td>1</td>
                        <td>{product.price}</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td></td>
                        <td></td>
                        <button onClick={handleCheckOut} className="mt-4 btn btn-info">Check Out</button>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    );
};

export default CheckOut;