import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderDetail from '../OrderDetail/OrderDetail';

const Orders = () => {
        const [loggedInUser, setLoggedInUser] = useContext(UserContext);
        const [orders, setOrders] = useState([]);
        useEffect(() => {
            fetch('https://pumpkin-cupcake-55925.herokuapp.com/orderDetails?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
        },[])
        // const {name, email, photo, product, checkOut} = orders;
    return (
        <div className="container toy-img grid-container mt-5">
            {
                orders.map(order => <OrderDetail order={order}></OrderDetail>)
            }

        </div>
    );
};

export default Orders;