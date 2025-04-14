// Navbar.jsx
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Projects', path: '/projects' },
    { id: 3, name: 'Skills', path: '/skills' },
    { id: 4, name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <span className="logo-text">{'<DevPortfolio/>'}</span>
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <span className="nav-text">{link.name}</span>
              <span className="nav-hover"></span>
            </NavLink>
          ))}
        </div>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX className="nav-icon" /> : <FiMenu className="nav-icon" />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;