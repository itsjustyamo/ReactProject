import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import SearchFilters from './components/SearchFilters';
import Footer from './components/Footer';
import ImageScrollbar from './components/ImageScrollbar';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Layout>
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/search" element={<SearchFilters />} />
          </Routes>
        </Layout>
        <ImageScrollbar />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
