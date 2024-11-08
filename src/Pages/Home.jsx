import React from 'react';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import { Outlet, useLoaderData } from 'react-router-dom';
import Heading from '../components/Heading';

const Home = () => {
  const categories = useLoaderData();
  // console.log(categories)
    return (
        <div>
          <Banner></Banner>
          <Heading title={"This is a Title"} subtitle={"This is a subtitle"}></Heading>
          <Categories categories={categories}></Categories>
          <Outlet></Outlet>
        </div>
    );
};

export default Home;