// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import logo from './logo.jpg';

const Home = ({ handleNavigation }) => {
  return (
    <div className="app">
  

      <div className="Information" style={{ height: '650px' }}>
        <h1 className='welcome'>WELCOME TO AUTOMATIC DRUG DISPENSER ONLINE</h1>
        <h1 className="ADD">MEDICINE SHOPPING MADE EASY!!!</h1>
        <h1 className="head">-EASY</h1>
        <p className="para">We provide easy services to simplify your life.</p>
        <h1 className="head">-SAFE</h1>
        <p className="para">Your details are safe with us,following strict guidelines.</p>
        <h1 className="head">-SECURE</h1>
        <p className="para">Ensuring a secure website experience without any compromises.</p>
        <div className="buttons">
          <Link to="/signup" onClick={() => handleNavigation('/signup')}>
            <button className="register">SIGN UP/LOGIN NOW!!!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
