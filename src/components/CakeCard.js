import React, {useState} from 'react';
import { Rating } from 'react-simple-star-rating'

export default function CakeCard({cake}) {
        const [rating, setRating] = useState(0) // initial rating value
      
        // Catch Rating value
        const handleRating = (rate) => {
          setRating(rate)
          // Some logic
        }

    return (
        <div className='Cake-card'>
            <h3>{cake.name}</h3>
            <img src={cake.image} width="400" height="350" />
            <p>${cake.price}</p>            
            <p>{cake.description}</p>
        <div className="col">
          <select
            name="size"
            //value={size}
            //onChange={handleInputChange}
            className="form-control"
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
            <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
            
            <br />
            
        </div>
    )
}
