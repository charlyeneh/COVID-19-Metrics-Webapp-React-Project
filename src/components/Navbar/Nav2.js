import React from 'react';
import './nav.css';
import { AiOutlineSetting } from 'react-icons/ai';
import { BsMicFill } from 'react-icons/bs';
import { MdArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Nav2() {
  return (
    <div className="navbar">
      <div className="left-nav">
        <div className="nav-arrow">
          <Link to="/">
            <MdArrowBackIos />
          </Link>
        </div>
        <h2 className="nav-header">Covid-19 Cases Per Country. </h2>
      </div>
      <div className="nav-icons">
        <h2><BsMicFill /></h2>
        <h2><AiOutlineSetting /></h2>
      </div>
    </div>
  );
}

export default Nav2;
