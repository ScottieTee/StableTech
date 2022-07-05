import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/components/Login';
import Signup from '../../server/pages/signup/Signup';
import Home from '../../server/pages/home/Home';
import Dashboard from '../../server/pages/dashboard/Dashboard';
import Horses from '../../server/pages/horses/Horses';
import Schedule from '../../server/pages/schedule/Schedule';


function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
            <div className='flex-column justify-flex-start min-100-vh'>
            <Header />
            <div className='container'>
            <Routes>
                <Route
                    path="/Signup"
                    element={<Signup />}
                />

                <Route
                    path="/Login"
                    element={<Login />}
                />

                <Route
                    path="/Home"
                    element={<Home />}
                />

                <Route
                    path="/Dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="/Horses"
                    element={<Horses />}
                />

                <Route
                    path="/Schedule"
                    element={<Schedule />}
                />
        </Routes>
      </div>
     <Footer />
    </div>
  </Router>
</ApolloProvider>
  );
}

export default App;