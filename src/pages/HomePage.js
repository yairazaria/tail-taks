import React, { Fragment } from "react";
import NavBar from '../components/NavBar';
import Items from '../components/Items/items';
import Pagination from '../components/Pagination';

const HomePage = () => {
  return (
    <Fragment>
      <NavBar />
      <Items />
      <Pagination />
    </Fragment>
  );
};

export default HomePage;
