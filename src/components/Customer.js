import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Customer({customer}) {
    return (
        <div className='Customer-show'>

            

            <Link to={`/customers/${customer.id}`}>
                <h3>{customer.name}</h3>
            </Link>
        </div>
    )
}
