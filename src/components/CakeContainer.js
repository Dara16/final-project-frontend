import React, {useEffect, useState} from 'react'
import {BASE_URL} from '../constraints/index.js'

export default function CakeContainer() {

    const [cakes, setCakes] = useState(null)

    useEffect(() => {
        fetch(BASE_URL + 'cakes')
            .then(res => res.json())
            .then(json => setCakes(json))
    }, [])

    useEffect(() => {
        console.log("Cakes: ")
        console.log(cakes)
    }, [cakes])


    return(
        <div>

        </div>
    )

}