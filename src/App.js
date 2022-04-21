import { Routes, Route } from 'react-router-dom';
import Details from './components/DetailsPage/Details';
import Home from './components/HomePage/Home';
// import Nav from './components/Navbar/Nav';
import './App.css';

function App() {
  return (
    <>
      {/* <Nav /> */}
      <div className="container">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="details" element={<Details />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
