import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../constraints';
import Order from './Order'



export default function CustomerDetails() {
    const [customer, setCustomer] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        fetch(BASE_URL + 'customers/' + id)
        .then((res) => res.json())
        .then((json) => setCustomer(json));
    }, [id]);

    

    return (
        <div>
            {customer && (
                <>
                    <h2>{customer.name}</h2>
                    <p>{customer.address}</p>
                    <p>{customer.phone_number}</p>
                    
                    <h3>Orders</h3>
                    {customer.orders.map((order) => (
                        <Order order={order} />
                    ))}
                    

                    
                
                
                </>
            )}
        </div>
    )
}