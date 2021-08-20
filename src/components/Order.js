import React from 'react';
import { Link } from 'react-router-dom';

import OrderItem from './OrderItem';

const Order = (props) => {
    const { orderItem } = props
    return(
        <div>
            <h1>Your Order</h1>
            {orderItem.map((item, index) => {
                return <OrderItem orderItem={item} key={index}/>
            })}
            <Link to='/confirm'>
                <button>Submit Order</button>
            </Link>
            
        </div>
    )
}

export default Order;