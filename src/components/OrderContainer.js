import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../constraints'
import Order from './Order'
//import OrderForm from './OrderForm'

export default function OrderContainer() {

    const [orders, setOrders] = useState(null)


    useEffect(() => {
        fetch(BASE_URL + 'orders')
            .then(res => res.json())
            .then(json => setOrders(json))
    }, [])

   function populateOrders() {
    return orders.map(order => <Order order={order} deleteOrder={deleteOrder} />)
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
           <h2>Order List</h2> 
            <table className="table table-striped">                            
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Order No.</th>
                        <th scope="col">completed</th>
                    </tr>
                </thead>
                <tbody>{orders && populateOrders()}</tbody>
            
            </table>
        </div>
    )
}
