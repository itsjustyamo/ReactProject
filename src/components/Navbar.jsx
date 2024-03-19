import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Disney Characters</a>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="./StayInTheKnow.jsx" target="_blank">Stay In The Know <span className="sr-only"></span></a>
           </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;







