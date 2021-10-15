import React from 'react'
import { Link } from 'react-router-dom';

export default function Customer({customer}) {
    return (
        <div className='list'>

            <Link to={`/customers/${customer.id}`}>
                <h3>{customer.name}</h3>
            </Link>
                <p>Address: {customer.address}</p>
                <p>Phone Number: {customer.phone_number}</p>

                <br />
        </div>
    )
}
