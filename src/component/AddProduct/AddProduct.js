import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './AddProduct.css';

const AddProduct = () => {
    const [imageURL, setImageURL] = useState(null)
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.number,
            imageURL: imageURL
        }
        const url = `http://localhost:5000/addEvent`;

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(eventData)
        })
    }
    const handleImageUpload = event => {
        console.log(event.target.files)
        const imageData = new FormData();
        imageData.set('key', '771368773d117114d2c99c89564cde08');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="container mt-5">
            
            <div className="form-container border mt-5 p-5">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input className="form-control" name="name" placeholder="Product Name" ref={register} />

                    <input className="form-control mt-4" name="number" type="number" placeholder="Price" ref={register} />

                    <input className="form-control mt-4" name="exampleRequired" type="file" onChange={handleImageUpload} />

                    <input className="btn btn-info mt-4" type="submit" />
                </form>
            </div>

        </div>
    );
};

export default AddProduct;