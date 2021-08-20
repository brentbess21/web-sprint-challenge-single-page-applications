import React from 'react';

const OrderItem = (props) => {
    const { orderItem } = props;
    return(
        <div>
            <div>Name: {orderItem.name}</div>
            <div>Size: {orderItem.size}</div>
            <div>Toppings: {orderItem.toppings}</div>
            <div>Special Instructions: {orderItem.special}</div>
        </div>
    )
}

export default OrderItem;