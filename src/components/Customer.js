import React, { useState } from 'react'

export default function Customer({customer}) {
    return (
        <div className='Customer-show'>
            <h3>{customer.name}</h3>
            <p>{customer.address}</p>
            <p>{customer.phone_number}</p>
        </div>
    )
}
