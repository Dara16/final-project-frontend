import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../constraints'
import Customer from './Customer'

export default function CustomerContainer() {

    const [customers, setCustomers] = useState(null)

    useEffect(() => {
        fetch(BASE_URL + 'customers')
            .then(res => res.json())
            .then(json => setCustomers(json))
    }, [])

    function populateCustomers() {
        return customers.map(customer => <Customer customer={customer} key={customer.id} />)
    }


    return(
        <div>
            {customers && populateCustomers()}
        </div>
    )

}
