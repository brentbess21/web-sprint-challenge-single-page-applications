import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'


const Home = (props) => {

    return (
        <div>
            <div className='home-img'>
                <h1>Your Favorite Food, Delivered While Coding</h1>
                <Link id='order-pizza' to="/pizza">Pizza?</Link>
            </div>
        </div>
    )
}

export default Home;