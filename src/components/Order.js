import React from 'react'
import { Link } from 'react-router-dom'

export default function Order({order, onSelectOrder, deleteOrder}) {
    const { date, order_number, completed } = order

    
    return (
        
            <tr>
                <td>{date}</td>
                <Link to={`/orders/${order.id}`}>
                <td>{order_number}</td>
                </Link>
                <td>{completed ? "Yes" : "No"}</td>
                <td>
               {/* <button type="button" className="btn btn-primary" onClick={handleClick}>Edit Order</button> */}
                <button className="btn btn-primary" onClick={() => deleteOrder(order)}>Delete Order</button>
                </td>
            </tr>

            
            

    )
}
