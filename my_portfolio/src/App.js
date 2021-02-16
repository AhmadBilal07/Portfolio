import React, { Component } from 'react';
import './App.css';
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Hero></Hero>
        <Skills></Skills>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
