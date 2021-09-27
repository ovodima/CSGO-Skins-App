import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
// import './App.css';
import Header from './Components/Header';
import Section from './Components/Section';
import {DataProvider} from './Components/Context'

class App extends React.Component {
  render() {
    
    return (
      <DataProvider>
        <div className='App'>
          <Router>
            <Header />
            <Section />
          </Router>
        </div>
      </DataProvider>
    )
  }
}

export default App;
