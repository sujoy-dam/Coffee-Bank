import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const {id}=useParams()
    const data = useLoaderData();
    console.log(data)
    const singleData = data.find(coffee=>coffee.id == id)
const {name}=singleData
    // console.log(typeof id,singleData)
    return (
        <div>
            <h1>Details{name}</h1>
        </div>
    );
};

export default Details;