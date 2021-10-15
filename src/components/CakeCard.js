import React, {useState} from 'react';
import { Rating } from 'react-simple-star-rating'

export default function CakeCard({ cake, onAddToCart }) {
        const [rating, setRating] = useState(0) 
        const { name, image, price, description } = cake
        
        const handleRating = (rate) => {
          setRating(rate)
        
        }

           

    return (
        <div className='card'>
          <div className="col">
            <h3>{name}</h3>
            <img src={image} width="400" height="350" alt=""/>
            <p>${(price/100).toFixed(2)}</p>            
            <p>{description}</p>
        
          <button onClick={() => onAddToCart(cake)}>
            Add To Cart
          </button> 
        </div>
          <Rating onClick={handleRating} ratingValue={rating} />

          <br />          
        </div>
        
      
    )
}
