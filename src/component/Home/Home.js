import React, { useEffect, useState } from 'react';
import Toys from '../Toys/Toys';
import './Home.css';

const Home = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://pumpkin-cupcake-55925.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])
    return (
        <div className='container mt-5'>
            <div className="spinner">
                {
                    events.length === 0 && <div class="spinner-border" role="status">
                    
                </div>
                }
            </div>
           <div className="grid-container"> 
            {
                events.map(event => <Toys key={event._id} event={event}></Toys>)
            }
            </div>
        </div>
    );
};

export default Home;