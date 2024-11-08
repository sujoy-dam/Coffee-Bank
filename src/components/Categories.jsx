import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Categories = ({ categories }) => {

    return (
        <div>
            <div role="tablist" className="tabs">
                <div className='flex justify-around'>
                    {/* <Link className='text-2xl font-bold'>all</Link> */}
                    {
                        categories.map(category =>
                    <Link to={`category/${category.category}`} className='text-2xl font-bold'>

                        {category.category}
                    </Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;