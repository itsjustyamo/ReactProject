import React from 'react';
import './App.css';

// Import your components
import Navbar from './components/Navbar';
//import Characters from './components/Characters';
import SearchFilters from './components/SearchFilters';
import Footer from './components/Footer';
import Characters from './components/Characters';
//import Character from '../pages/CharactersDetails'

function App() {
  return (
    <div>
        <Navbar />
        <SearchFilters />
        <Characters/>
        <Footer /> 
        
    </div>
  );
};

export default App;