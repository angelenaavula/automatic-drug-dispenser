import React, { useState, useEffect} from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Signup from './components/signup';
import Login from './components/login';
import About from './components/about';
import Contact from './components/contact';
import DoctorDashboard from './components/doctorpage';
// import SecondPage from './components/secondpage';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (route) => {

    setShowNavbar(route !== '/');
    navigate(route);
  };
  useEffect(() => {
    setShowNavbar(location.pathname !== '/');
  }, [location]);


  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={<Home handleNavigation={handleNavigation} />}
        />
      
        <Route
          path="/login"
          element={<Login handleNavigation={handleNavigation} />}
        />
        <Route
          path="/signup"
          element={<Signup handleNavigation={handleNavigation} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctorpage" element={<DoctorDashboard />} />
        {/* <Route path="/secondpage" element={<SecondPage />} /> */}
      </Routes>
    </>
  );
};

export default App;