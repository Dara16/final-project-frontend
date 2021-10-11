import React, {useState} from 'react';
import { Rating } from 'react-simple-star-rating'

export default function CakeCard({ cake, onAddToCart }) {
        const [rating, setRating] = useState(0) 
        const { name, image, price, description, size } = cake
        
        const handleRating = (rate) => {
          setRating(rate)
        
        }

           

    return (
        <div className='row'>
            <h2>Cakes</h2>
            <h3>{name}</h3>
            <img src={image} width="400" height="350" alt=""/>
            <p>${(price/100).toFixed(2)}</p>            
            <p>{description}</p>
        <div className="col">
          <select
            name="size"
            value={size}
            //onChange={handleInputChange}
            className="form-control"
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
          <button type="button" className="btn btn-primary">
            Update Size
          </button>
          <button className="btn btn-primary" onClick={() => onAddToCart(cake)}>
            Add To Cart
          </button>
        </div>
            <Rating onClick={handleRating} ratingValue={rating} />           
        </div>
        

    )
}
