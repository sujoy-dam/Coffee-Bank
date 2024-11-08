import React from 'react';

const Heading = ({title,subtitle}) => {
    return (
        <div className='mb-10'>
            <h1 className='text-4xl font-bold text-center'>{title}</h1>
            <p className='font-medium text-center mt-5'>{subtitle}</p>
        </div>
    );
};

export default Heading;