import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './Components/NavBar';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Products from './Components/Products';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Hero />
            <Features />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
