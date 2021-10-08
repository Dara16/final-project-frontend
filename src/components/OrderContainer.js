import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../constraints'
import Order from './Order'

export default function OrderContainer() {

    const [orders, setOrders] = useState(null)

    useEffect(() => {
        fetch(BASE_URL + 'orders')
            .then(res => res.json())
            .then(json => setOrders(json))
    }, [])


    function populateOrders() {
        return orders.map(order => <Order order={order} deleteOrder={deleteOrder} key={order.id}/>)
    }

    function deleteOrder(order) {
        fetch(BASE_URL + 'orders/' + order.id, {
            method: "DELETE"
        })
        const newOrders = orders.filter(ord => ord.id !== order.id)
        setOrders(newOrders)
    }
         
    return (
        <div>
            <h2>Orders List</h2>
            {orders && populateOrders()}
        </div>
    )
}
