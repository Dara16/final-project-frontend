import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../constraints'
import Order from './Order'

export default function OrderContainer() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(BASE_URL + 'orders')
            .then(res => res.json())
            .then(json => setOrders(json))
    }, [])

    function populateOrders() {
        return orders.map(order => <Order order={order} updateOrder={updateOrder} deleteOrder={deleteOrder}/>)
    }

    function updateOrder(order) {
        fetch(BASE_URL + 'orders/' + order.id, {
            method : "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
        })
        .then((res) => res.json())
        const newOrders = orders.map((ord) => {
            if (ord.id === order.id) {
                ord = order
            }
            return ord
        })
        setOrders(newOrders)
    }

    function deleteOrder(order) {
        fetch(BASE_URL + 'orders/' + order.id, {
            method: "DELETE"
        })
        const newOrders = orders.filter(ord => ord.id !== order.id)
        setOrders(newOrders)
    }  

    return (
        <>
           <h2>Order List</h2>
           <table class="table">                            
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Order No.</th>
                        <th scope="col">completed</th>
                    </tr>
                </thead>
                <tbody>{orders && populateOrders()}</tbody>
            
        </table> 
        </>
    )
}
