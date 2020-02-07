import React from 'react';
import './App.css';
import Header from './Components/Header';
import NavList from './Components/NavList';
import ContentSection from './Components/ContentSection';

const links = ["ABOUT", "AUDIO", "VIDEO", "SOFTWARE", "SKATE TV", "BLOG", "CONTACT"];

function App() {
  return (
    <div className="App">
      <Header />
      <NavList links={links}/>
      <ContentSection />
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">Hello {this.props.name}</div>
//     )
//   }
// }

export default App;