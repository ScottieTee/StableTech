// import logo from './logo.svg';
import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import Navbar from './components/navbar.jsx';
import Hero from './components/hero';

function App() {
  return (
    <div className="App">
      <Footer/>
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
