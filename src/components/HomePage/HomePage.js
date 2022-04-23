import { useState } from 'react';
import { useSelector } from 'react-redux';
import DataRender from '../DataRender/DataRender';
import './Home.css';
import Nav from '../Navbar/Nav';

const HomePage = () => {
  const countries = useSelector((state) => state);
  const [searchItem, setSearchItem] = useState('');
  const loadingStatus = countries.loading;
  return (
    <>
      <Nav />
      <div className="container">
        <div className="search-input">
          <h4>Search</h4>
          <input
            value={searchItem}
            type="text"
            onChange={(e) => setSearchItem(e.target.value)}
            placeholder="...search Country"
          />
        </div>
        <div className="display-country">
          {loadingStatus === false
            ? countries.data
              .filter(
                (country) => country.CountryName.toLowerCase().includes(searchItem.toLowerCase()),
              )
              .map(
                (country) => (
                  <>
                    <DataRender
                      country={country.CountryName}
                      key={country.ID}
                      total={country.TotalConfirmed}
                    />
                  </>
                ),
              ) : <h1 className="loading">...loading</h1>}
        </div>
      </div>
    </>
  );
};

export default HomePage;
