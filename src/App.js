import React from 'react';
import './App.css';
import Header from './Components/Header';
import NavList from './Components/NavList';
import ContentSection from './Components/ContentSection';

const links = ["ABOUT", "AUDIO", "VIDEO", "SOFTWARE", "SKATE TV", "BLOG", "CONTACT"];

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <NavList links={links}/>
//       <ContentSection />
//     </div>
//   );
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">Hello {this.props.name}</div>
//     )
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkName: "CONTENT"
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let name = "CONTENT";
    
    function checkLinkName(text) {
      if (text === e) {
        name = text;
      }
    }

    links.forEach(element => checkLinkName(element));

    this.setState(state => ({
        linkName: name
      })
    );
  };

  render() {
    return(
      <div className="App" onClick={e => this.handleClick(e.target.textContent)}>
        <Header />
        <NavList links={links}/>
        <ContentSection text={this.state.linkName} />
      </div>
    )
  }
}

export default App;