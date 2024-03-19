import React from 'react';
import './App.css';

// Import your components
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import SearchFilters from './components/SearchFilters';
import Footer from './components/Footer';
import ImageScrollbar from './components/ImageScrollbar';
// import CharacterDetail from '../pages/CharacterDetail';

function App() {
  return (
    <div>
        <Navbar />
        <SearchFilters />
        <Characters />
        <ImageScrollbar />
        <Footer /> 
        
    </div>
  );
};

export default App;



