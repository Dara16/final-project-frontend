import React from 'react';

export default function CakeCard({cake}) {


    return (
        <div className='Cake-card'>
            <h3>{cake.name}</h3>
            <img src={cake.image} width="400" height="350" />
            <p>{cake.size}</p>
            <p>{cake.description}</p>
            <p>${cake.price}</p>
            <br />
            
        </div>
    )
}
