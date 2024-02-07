"use client"
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <nav className="navbar bg-light fixed-top">
      <div className="container-fluid">
        <Link legacyBehavior href="/" passHref>
          <a className="navbar-brand">Tutorial For Safary</a>
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleOffcanvas}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`offcanvas offcanvas-end${showOffcanvas ? ' show' : ''}`} tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" className="btn-close" onClick={toggleOffcanvas} aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link legacyBehavior href="/" passHref>
                  <a className="nav-link active" aria-current="page">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link legacyBehavior href="/Posts" passHref>
                  <a className="nav-link">Posts</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link legacyBehavior href="/Articals" passHref>
                  <a className="nav-link">Articles</a>
                </Link>
              </li>
            
            </ul>
            <form className="d-flex mt-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
