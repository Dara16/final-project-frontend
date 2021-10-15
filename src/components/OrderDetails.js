import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../constraints';

export default function OrderDetails() {
    const [order, setOrder] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        fetch(BASE_URL + 'orders/' + id)
        .then((res) => res.json())
        .then((json) => setOrder(json));
    }, [id]);

    return (
        <div classname="block">
            {order && (
                <>
                    <h3>Order Number {order.order_number}</h3>
                    <br />
                    <h3>Order Details</h3>
                    <p>Item Ordered: {order.cake.name}</p>
                    <p>Customer Name: {order.customer.name}</p>
                    <p>Address: {order.customer.address}</p>
                    <p>Phone Number: {order.customer.phone_number}</p>
                </>
            )}
        </div>
    )
}
