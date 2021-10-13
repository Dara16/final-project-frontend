import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navbar">
            <img src="https://t3.ftcdn.net/jpg/03/21/22/88/360_F_321228811_JViep8Q3h40QJsToIH2LzvgWoR58iw8r.jpg" alt="logo" width="90" height="90"/>
            <h1 className="text-center">LYDIA'S BAKE SHOP</h1>
            <Link to="/">Home</Link>
            <Link to="/cakes">Cakes</Link>
            <Link to="/customers">Customers</Link>
            <Link to="/orders">Orders</Link>
        </div>
    )
}