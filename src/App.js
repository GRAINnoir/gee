import React from 'react';
import './App.css';
import Header from './Components/Header';
import NavList from './Components/NavList';

const links = ["ABOUT", "AUDIO", "VIDEO", "SOFTWARE", "SKATE TV", "BLOG", "CONTACT"];

function App() {
  return (
    <div className="App">
      <Header />
      <NavList links={links}/>
    </div>
  );
}

export default App;