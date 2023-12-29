import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="profile-image">
          <img src="/alfi.jpeg" alt="Profile" />
        </div>
        <ul>
  <li>
    <Link to="/home">Home</Link>
  </li>
  <li>
    <Link to="/about">About</Link>
  </li>
  <li>
    <Link to="/experience">Experience</Link>
  </li>
  <li>
    <Link to="/skills">Skills</Link>
  </li>
  <li>
    <Link to="/interests">Interest</Link>
  </li>
  <li>
    <Link to="/awards">Awards</Link>
  </li>
</ul>
      </nav>
    );
  }
}

export default Navbar;
