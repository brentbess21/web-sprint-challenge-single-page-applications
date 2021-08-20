import React from 'react';

//components
import OrderItem from './OrderItem';
const Confirmation = (props) => {

    const { orderItem } = props;

    return (
        <div>
            <h1>Thank you for Ordering!</h1>
            {orderItem.map((item, index) => {
                return <OrderItem orderItem={item} key={index}/>
            })}
        </div>
    )
}

export default Confirmation;