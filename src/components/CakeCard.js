import React, {useState} from 'react';
import { Rating } from 'react-simple-star-rating'

export default function CakeCard({cake}) {
        const [rating, setRating] = useState(0) 
      
        
        const handleRating = (rate) => {
          setRating(rate)
        
        }

    return (
        <div className='Cake-card'>
            <h2>Cakes</h2>
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
          <button>Update Size</button>
        </div>
            <Rating onClick={handleRating} ratingValue={rating} />
            
            <br />
            
        </div>
    )
}
