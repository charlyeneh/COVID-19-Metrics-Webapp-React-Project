import React from 'react';
import './nav.css';
import { AiOutlineSetting } from 'react-icons/ai';
import { BsMicFill } from 'react-icons/bs';

function Nav() {
  return (
    <div className="navbar">
      <div>
        <h2 className="nav-header">Covid-19 Cases Update for Top 20 African Countaries. </h2>
      </div>
      <div className="nav-icons">
        <h2><BsMicFill /></h2>
        <h2><AiOutlineSetting /></h2>
      </div>
    </div>
  );
}

export default Nav;
