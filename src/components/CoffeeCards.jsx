import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeeCards = () => {
    const navigate = useNavigate()
    const coffeesData = useLoaderData()
    const { category } = useParams()
    const [coffees, setCoffees] = useState([coffeesData])
    // console.log(coffees)

    useEffect(() => {
        if (category) {
            const filteredByCategory = [...coffeesData].filter(coffee => coffee.category === category)
            console.log(filteredByCategory)
            setCoffees(filteredByCategory)
        } else {
            setCoffees(coffeesData.slice(0, 6))
        }
    }, [category, coffeesData])

    const handleViewAll =()=>{
        console.log('connected')
        navigate('/coffee')
    }
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 container mx-auto gap-5 mt-10'>
                {/* <h1 className="">Coffee CArds...{category.category}</h1> */}
                {
                    coffees.map(coffee => <Card coffee={coffee}></Card>)
                }
            </div>
            <button onClick={()=>handleViewAll()} className='btn btn-accent mt-5'>View All</button>
        </div>
    );
};

export default CoffeeCards;