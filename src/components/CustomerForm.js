import React, { useState } from 'react'

export default function CustomerForm({createCustomer}) {
    const [customer, setCustomer] = useState({name: "", address: "", phone_number: ""})

    function handleChange(e) {
        const updatedValue = {...customer}
        updatedValue[e.target.name] = e.target.value
        setCustomer(updatedValue)
    }

    function handleSubmit(e) {
        e.preventDefault()
        createCustomer(customer)
        
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="name" value={customer.name} onChange={handleChange} />
                <input name="address" value={customer.address} onChange={handleChange} />
                <input name="phone-number" value={customer.phone_number} onChange={handleChange} />
                <button type="submit">Add Customer</button>
            </form>

        </div>
  
    )
   
}
