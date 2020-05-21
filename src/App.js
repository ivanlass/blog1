import React from 'react';
import './App.css';
import Hero from './components/Hero'
import Girls from './components/Girls'
import Advantages from './components/Advantages'
import Testimonials from './components/Testimonials'
import Cta from './components/Cta'

function App() {
  return (
    <div className="App">
      <Hero />
      <Girls />
      <Advantages />
      <Testimonials />
      <Cta />
    </div>
  );
}

export default App;
