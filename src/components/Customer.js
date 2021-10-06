import React, { useState } from 'react'

export default function Customer({customer}) {
    return (
        <div className='Customer-show'>
            <h3>{customer.name}</h3>
            
        </div>
    )
}
