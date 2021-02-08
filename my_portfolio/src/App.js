import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Hero></Hero>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
