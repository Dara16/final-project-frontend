import React from 'react'
import { Link } from 'react-router-dom'

export default function Order({order, deleteOrder}) {
    return (
        <div className='order-show'>
        
            <tr>
                <td>{order.date}</td>
                <Link to={`/orders/${order.id}`}>
                <td>{order.order_number}</td>
                </Link>
                <td>{order.completed ? "Yes" : "No"}</td>
                <td>
                <button onClick={() => deleteOrder(order)}>Delete Order</button>
                </td>
            </tr>

            
            
        </div>
    )
}
