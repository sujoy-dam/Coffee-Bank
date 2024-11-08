import React from 'react';

const Card = ({ coffee }) => {
    const { name, image, category, popularity,origine, rating,type } = coffee
    return (
        <div className="card bg-base-100 shadow-xl">
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
        </div>
    );
};

export default Card;