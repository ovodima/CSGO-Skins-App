import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
// import './App.css';
import Header from './Components/Header';
import Section from './Components/Section';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Header />
          <Section />
        </Router>
      </div>
    )
  }
}

export default App;
