import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Story from './components/Story';
import Divider from './components/Divider';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Divider></Divider>
      <Story></Story>
    </div>
  );
}

export default App;
