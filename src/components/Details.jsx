import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Heading from "./Heading"
import Img from "../assets/nutrition.png"

const Details = () => {
    const { id } = useParams()
    const data = useLoaderData();
    const [coffee, setCoffee] = useState({})
    // console.log(data)
    useEffect(() => {

        const singleData = data.find(coffee => coffee.id == id)
        setCoffee(singleData)
    }, [data, id])
    const { name, image, category, ingredients, description, popularity, origin, rating, making_process, nutrition_info } = coffee
    // const key = Object.keys(nutrition_info)
    // console.log(key)
    return (
        <div>
            <h1 className='text-4xl'>{description}</h1>
            <img className='w-full' src={image} alt="" />
            <div className='mb-5'>
                <h1 className='text-3xl'>{origin} Coffee</h1>
                <p>Popularity: {popularity}</p>
                <p>Rating: {rating}</p>
            </div>
            <div className='mb-5'>
                <h1 className='text-3xl'>Making Process</h1>
                <p>{making_process}</p>
            </div>
            <div className='flex justify-between gap-32'>
                <div>
                    <div className='mb-5'>
                        <p className='text-3xl'>Ingredients:</p>
                        {
                            // ingredients.map(ingredient=>console.log(ingredient))
                        }

                    </div>
                    <div className='mb-5'>
                        <p className='text-3xl'>Nutrition:</p>

                    </div>
                </div>
                <div>
                        <img src={Img} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Details;