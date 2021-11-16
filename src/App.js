import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Home from './pages/Home';
import Parks from './pages/Parks';
import Activites from './pages/Activities';
import Webcams from './pages/Webcams'
const App = () => (
  <div className="App">
    <div className="Top">
      <NavBar />
      <Header />
    </div>
    <Home />
    <Parks />
    <Activites />
    <Webcams />

  </div>
)
export default App;
