import React, { Component } from 'react';
import './App.css';
import Customers from './components/Customers'
import { BrowserRouter as Router, BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Contact from './components/Contact';

class App extends Component {


  render() {
    console.log("Host URL" + process.env.PUBLIC_URL);
    return (

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>


    );
  }
}

export default App;
