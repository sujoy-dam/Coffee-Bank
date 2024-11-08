import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {

    return (
        <div>
            <div role="tablist" className="tabs">
                <div className='flex justify-around'>
                    {/* <Link className='text-2xl font-bold'>all</Link> */}
                    {
                        categories.map(category =>
                    <NavLink to={`category/${category.category}`} className={({isActive})=>`text-2xl font-medium ${isActive?"underline text-yellow-500 font-bold":""}`}>

                        {category.category}
                    </NavLink>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;