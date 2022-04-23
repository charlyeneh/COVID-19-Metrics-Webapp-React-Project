import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import '../HomePage/Home.css';

const DataRender = ({ country, total }) => (
  <Link className="country_link" to={`/Details/${country}`}>
    <p className="arrow"><BsArrowRightCircle /></p>
    <span className="country_name">
      <p>{country}</p>
      <p>{total}</p>
    </span>
  </Link>
);

DataRender.propTypes = {
  country: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
};

export default DataRender;
