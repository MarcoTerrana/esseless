import React from 'react';
import Headers from './Components/Headers/Headers';
import Gallery from './Components/Galley/Galllery';
import Welcome from './Components/Welcome/Welcome';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Headers />
        <Welcome />
        <Gallery />
        <Main />
        <Footer />
    </div>
  );
 }
}

export default App;
