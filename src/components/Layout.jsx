import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <Router>
      <div>
        {/* Content before children */}
        {children}
        {/* Content after children */}
      </div>
    </Router>
  );
};

export default Layout;

