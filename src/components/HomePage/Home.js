import React from 'react';
import './Home.css';
import { BsArrowRightCircle } from 'react-icons/bs';
import Nav from '../Navbar/Nav';

const Home = () => (
  <>
    <Nav />
    <div className="display-container">
      <div className="search-input">
        <h4>Search</h4>
        <input type="text" placeholder="...search Country" />
      </div>
      <div className="display-country">
        <div className="grid">
          <h1 className="arrow"><BsArrowRightCircle /></h1>
          <div className="display">Country 1</div>
        </div>
        <div className="grid">
          <h1 className="arrow"><BsArrowRightCircle /></h1>
          <div className="display">Country 1</div>
        </div>
        <div className="grid">
          <h1 className="arrow"><BsArrowRightCircle /></h1>
          <div className="display">Country 3</div>
        </div>
        <div className="grid">
          <h1 className="arrow"><BsArrowRightCircle /></h1>
          <div className="display">Country 4</div>
        </div>
        <div className="grid">
          <h1 className="arrow"><BsArrowRightCircle /></h1>
          <div className="display">Country 3</div>
        </div>
        <div className="grid">
          <h1 className="arrow"><BsArrowRightCircle /></h1>
          <div className="display">Country 4</div>
        </div>
      </div>
    </div>
  </>
);

export default Home;
