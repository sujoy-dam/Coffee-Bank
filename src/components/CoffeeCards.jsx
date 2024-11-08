import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeeCards = () => {
    const coffeesData = useLoaderData()
    const {category} = useParams()
    const [coffees,setCoffees]=useState([coffeesData])
    // console.log(coffees)

    useEffect(()=>{
        if(category){
            const filteredByCategory = [...coffeesData].filter(coffee=>coffee.category===category)
        console.log(filteredByCategory)
        setCoffees(filteredByCategory)
        }else{
            setCoffees(coffeesData)
        }
    },[category,coffeesData])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 container mx-auto gap-5 mt-10'>
            {/* <h1 className="">Coffee CArds...{category.category}</h1> */}
            {
                coffees.map(coffee=><Card coffee={coffee}></Card>)
            }
        </div>
    );
};

export default CoffeeCards;