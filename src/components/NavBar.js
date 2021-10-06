import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/cakes">Cakes</Link>
            <Link to="/customers">Customers</Link>
            
        </div>
    )
}