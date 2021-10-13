import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../constraints'
import Customer from './Customer'
import CustomerForm from './CustomerForm'

export default function CustomerContainer() {

    const [customers, setCustomers] = useState(null)

    useEffect(() => {
        fetch(BASE_URL + 'customers')
            .then(res => res.json())
            .then(json => setCustomers(json))
    }, [])

    function populateCustomers() {
        return customers.map(customer => <Customer customer={customer} createCustomer={createCustomer} key={customer.id} />)
    }

    function createCustomer(customer) {
 
        fetch(BASE_URL + "/customers", {
            method: "POST",
            body: JSON.stringify(customer),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((json) => setCustomers([...customers, json]))
    } 

    return(
        <div className="customer-list">
            <br />
            <h2>Add New Customer</h2>
            <CustomerForm createCustomer={createCustomer} />
            <br />
            <h2>Customer List</h2>
            {customers && populateCustomers()}
        </div>
    )

}
