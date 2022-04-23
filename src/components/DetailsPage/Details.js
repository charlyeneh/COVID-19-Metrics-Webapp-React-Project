import React from 'react';
import { useSelector } from 'react-redux';
// import { useParams, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Nav2 from '../Navbar/Nav2';

const Details = () => {
  const params = useParams();
  const { country } = params;
  const countries = useSelector((state) => state);
  let covidData = [];
  if (countries !== undefined) {
    covidData = countries.data.filter((data) => data.CountryName === country);
  }
  const countryFlag = `https://countryflagsapi.com/png/${country}`;

  return (
    <>
      <Nav2 />
      <div className="details_container container">
        <div>
          <h1 className="description_header">{`${country}'s Covid Data`}</h1>
        </div>
        <img className="country_flag" src={countryFlag} alt="country flag" />
        <div>
          {countries !== undefined
            ? (
              <div className="description_container">
                <span className="description">
                  Country:&nbsp;&nbsp;
                  {covidData[0].CountryName}
                </span>
                <span className="description">
                  Date:&nbsp;&nbsp;
                  {covidData[0].Date}
                </span>
                <span className="description">
                  Total Confirmed Cases:&nbsp;&nbsp;
                  {covidData[0].TotalConfirmed}
                </span>
                <span className="description">
                  New Confirmed Cases:&nbsp;&nbsp;
                  {covidData[0].NewConfirmed}
                </span>
                <span className="description">
                  New Recovered:&nbsp;&nbsp;
                  {covidData[0].NewRecovered}
                </span>
                <span className="description">
                  Total Deaths:&nbsp;&nbsp;
                  {covidData[0].TotalDeath}
                </span>
                <span className="description">
                  New Deaths:&nbsp;&nbsp;
                  {covidData[0].NewDeath}
                </span>
              </div>
            ) : <h1>***Loading***</h1>}
        </div>
      </div>
    </>
  );
};

export default Details;

// import React from 'react';
// import Nav2 from '../Navbar/Nav2';
// import './details.css';

// const Details = () => (
//   <>
//     <Nav2 />
//     <div className="details-container">
//       <div>
//         <h3>Country Name</h3>
//         <div>details container</div>
//       </div>
//     </div>
//   </>
// );

// export default Details;
