import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
  from 'react-router-dom';
import Home from './pages';
import Signup from './pages/signup';
import Schedule from './pages/schedule';

function App() {
return (
  <Router>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<Signup />} />
    <Route path='/contact' element={<Schedule />} />
  </Routes>
  </Router>
);
}

export default App;

