import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Order({order, updateOrder, deleteOrder}) {
    //const {date, order_number, completed } = order
    const [newOrder, setNewOrder] = useState({...order})
    const [editMode, setEditMode] = useState(false)

    function handleChange(e) {
        const updatedvalue = { ...newOrder }
        updatedvalue[e.target.name] = e.target.value
        setNewOrder({ ...updatedvalue })
    }

    function handleUpdate(e) {
        e.preventDefault()
        updateOrder(newOrder)
        setEditMode(false)
    }

    function toggleEdit() {
        setEditMode(!editMode)
    }
 
    return (

            <tr>
                <td>{order.date}</td>
                <Link to={`/orders/${order.id}`}>
                <td>{order.order_number}</td>
                </Link>
                <td>{order.completed}</td>
                <td>
                {editMode && (
                    <form onSubmit={handleUpdate}>
                        <input name="order-number" value={newOrder.order_number} onChange={handleChange} />
                        <input name="completed" value={newOrder.completed} onChange={handleChange} />
                        <td>
                            <button type="submit" className="button">Update Order</button>
                            <button className="button" onClick={() => deleteOrder(order)}>Delete Order</button>
                        </td>
                    </form>
                )}
                </td>
                <button className="edit" onClick={toggleEdit}>Edit</button>
            </tr>
    
            
            

    )
}
