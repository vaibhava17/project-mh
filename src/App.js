import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './Components/NavBar';
import Hero from './Components/Hero';
import Features from './Components/Features';
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
          <Router>
            <Route exact path="/products">
              <h1>Products</h1>
            </Route>
          </Router>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
