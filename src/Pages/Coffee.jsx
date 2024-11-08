import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';

const Coffee = () => {
    const data = useLoaderData()
    const [coffees,setCoffees]=useState(data)
    const handleSortMethod = sortBy =>{
        if(sortBy=="popularity"){
            console.log(sortBy)
            const popular = [...data].sort((a, b) => a.popularity - b.popularity)
            setCoffees(popular)
        }else if(sortBy=='rating'){
            const rating = [...data].sort((a, b) => a.rating - b.rating)
            setCoffees(rating)
        }
    }
    return (
        <>
        <div className='flex justify-between items-center mt-20'>
            <div>
                <h1 className='text-3xl font-medium'>
                    Sort Coffees's By Popularity & Rating-
                </h1>
            </div>
            <div className='space-x-5'>
                <button onClick={()=>handleSortMethod("popularity")} className='btn btn-lg bg-warning'>Sort By Popularity</button>
                <button onClick={()=>handleSortMethod('rating')} className='btn btn-lg bg-warning'>Sort By Rating</button>
            </div>
        </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 container mx-auto gap-5 mt-10'>
                {
                    coffees.map(coffee => <Card coffee={coffee}></Card>)
                }
            </div></>
    );
};

export default Coffee; 