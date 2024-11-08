import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ coffee }) => {
    const { id, name, image, category, popularity, origine, rating, type } = coffee
    return (
        <div className="card bg-base-100 shadow-xl">
            <Link to={`/coffee/${id}`} >
                <figure>
                    <img
                        className='w-full h-64'
                        src={image}
                        alt="coffee" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Name: {name}
                    </h2>
                    <p>Category: {category}</p>
                    <p>Type: {type}</p>
                    <p>Origine: {origine}</p>
                    <p>Rating: {rating}</p>
                    <p>Popular: {popularity}</p>
                </div>
            </Link>
        </div>
    );
};

export default Card;