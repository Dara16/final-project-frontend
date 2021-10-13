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
                    <h3>{customer.name}</h3>
                    <p>{customer.address}</p>
                    <p>{customer.phone_number}</p>
                
                    <h3>Orders</h3>
                    <table className="table">                            
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Order No.</th>
                                <th scope="col">completed</th>
                            </tr>
                        </thead>    
                        <tbody>
                            {customer.orders.map((order) => (
                            <Order order={order} />
                            ))}
                        </tbody>
                    </table>
                </>
                
            )}
        </div>
    )
}