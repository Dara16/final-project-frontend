import React, {useEffect, useState} from 'react'
import {BASE_URL} from '../constraints/index.js'
import CakeCard from './CakeCard.js'

export default function CakeContainer() {

    const [cakes, setCakes] = useState(null)

    useEffect(() => {
        fetch(BASE_URL + 'cakes')
            .then(res => res.json())
            .then(json => setCakes(json))
    }, [])

    function populateCakes() {
        return cakes.map(cake => <CakeCard cake={cake} />)
    }


    return(
        <div>
            {cakes && populateCakes()}
        </div>
    )

}