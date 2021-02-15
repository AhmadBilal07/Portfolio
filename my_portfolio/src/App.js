import React, { Component } from 'react';
import './App.css';
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Hero></Hero>
        <Skills></Skills>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
