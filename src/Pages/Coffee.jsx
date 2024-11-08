import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';

const Coffee = () => {
    const data = useLoaderData()
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 container mx-auto gap-5 mt-10'>
            {
                data.map(coffee => <Card coffee={coffee}></Card>)
            }
        </div>
    );
};

export default Coffee; <h1>Coffee</h1>