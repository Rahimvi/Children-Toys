import React from 'react';

const OrderDetail = (props) => {
    const {name, email, photo, product, checkOut} = props.order;
    return (
        <div className="container toy-img">
            <div className="card rounded shadow p-3 mb-5 bg-body" style={{width: "18rem"}}>
                <img src={photo} className="card-img-top" alt="..."></img>
                    <div className="card-body text-center">
                        <h5 className="card-title">User Name: {name}</h5>
                        <div className="">
                            <p className="card-text">Email: {email}</p>
                            <p className="card-text">{product.name}</p>
                            <p className="card-text">Price: ${product.price}</p>
                            <p className="card-text">{(new Date(checkOut).toDateString('dd/MM/yyyy'))}</p>
                            
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default OrderDetail;