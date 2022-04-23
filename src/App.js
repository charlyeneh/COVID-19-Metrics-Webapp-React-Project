// import { useDispatch } from 'react-redux';
// import React, { useEffect } from 'react';
// import { fetchCountriesData } from './redux/covidData/covidData';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Details from './components/DetailsPage/Details';
// // import Home from './components/HomePage/Home';
// // import Nav from './components/Navbar/Nav';
// import './App.css';
// import HomePage from './components/HomePage/HomePage';

// const App = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchCountriesData());
//   }, []);
//   return (
//     <>
//       <div className="container">
//         <div>
//           <Router>
//             <Routes>
//               {/* <Route path="/" element={<Home />} /> */}
//               <Route path="/" element={<HomePage />} />
//               <Route path="details" element={<Details />} />
//             </Routes>
//           </Router>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { fetchCountriesData } from './redux/covidData/covidData';
import HomePage from './components/HomePage/HomePage';
import Details from './components/DetailsPage/Details';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountriesData());
  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/Details/:country" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
