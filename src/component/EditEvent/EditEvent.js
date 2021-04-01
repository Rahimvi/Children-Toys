import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const EditEvent = (props) => {
    const {name, price, _id} = props.editEvent;
    const handleDelete = id => {
        fetch('https://pumpkin-cupcake-55925.herokuapp.com/deleteEvent/'+id, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log('delete success', data);
        })

    }
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">{name}</th>
                        <th scope="col">{price}</th>
                        <th onClick={() => handleDelete(_id)} scope="col" className="text-danger btn"><FontAwesomeIcon icon={faTrash}/></th>
                    </tr>
                </thead>
            </table>

        </div>
    );
};

export default EditEvent;