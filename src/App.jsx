
import './App.css'
import React from 'react';
import Footer from './components/Footer';
import ImageScrollbar from './components/ImageScrollbar';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import SearchFilters from './components/SearchFilters';

const App = () => {
  return (
    <div>
      <Navbar />
      <Layout>
        <Characters />
        <SearchFilters />
      </Layout>
      <ImageScrollbar />
      <Footer />
    </div>
  );
};

export default App
