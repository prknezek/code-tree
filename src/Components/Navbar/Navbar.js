import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../User/UserContext';

import './navbar.css';

export default function Navbar() {
  const { user, isLoading } = useContext(UserContext);
  const [isCollapse, setIsCollapse] = useState('');

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 992) {
        setIsCollapse('collapse');
      } else {
        setIsCollapse('');
      }
    }
    // Call function once when component mounts to set initial state
    handleResize();
    window.addEventListener('resize', handleResize);
  })

  return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light text-dark sticky-top'>
        <div className='col-1'></div>
        <div className='col-10'>
          <div className='d-lg-flex align-items-center'>
            <div className='d-flex small-wrapper'>
              {/* Navbar toggler */}
              <button className="me-3 ms-lg-0 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navItems" aria-controls="navItems" aria-expanded="false" aria-label="Toggle nav items">
                <span className="navbar-toggler-icon"></span>
              </button>
              {/* Logo */}
              <NavLink className='navbar-brand' to='/'>
                <img src={require('../../assets/imgs/logo-inverted.png')} width='80' height='50' className='d-inline-block align-top ms-2' alt='' />
              </NavLink>
              {/* Signup/login div */}
              <div className='d-flex ms-auto d-lg-none'>
                {!isLoading && (user ? (
                  <div className="d-flex align-items-center justify-content-center ms-2">
                    <button className='btn btn-light border-0 rounded-circle p-0'>
                      <img src={require('../../assets/imgs/profile.png')} width='50' height='50' alt='' />
                    </button>
                  </div>
                ) : (
                  <NavLink to='/login'>
                    <button className='btn btn-light shadow-none' id='signup'>Sign Up</button>
                  </NavLink>
                ))}
                {/* <button className='btn btn-light shadow-none' id='login'>Log in</button> */}
              </div>
            </div>
            {/* Main nav links */}
            <div id='navItems' className='collapse navbar-collapse'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0 w-100'>
                <div className='d-lg-flex main-links-wrapper'>
                  {/* Dashboard */}
                  <li className='nav-item'>
                    <a className='nav-link'>
                      <span className='h6 text-dark'>Dashboard</span>
                    </a>
                  </li>
                  {/* Flashcards */}
                  <li className='nav-item'>
                    <a className='nav-link'>
                      <span className='h6 text-dark'>Flashcards</span>
                    </a>
                  </li>
                  {/* Lessons */}
                  <li className='nav-item dropdown'>
                    <a className="nav-link" id="tutorialDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className="h6 dropdown-toggle text-dark">Lessons</span>
                    </a>
                    <ul className='dropdown-menu mb-3' aria-labelledby='tutorialDropdown'>
                      <li className='d-flex justify-content-end me-2'>
                        <button className='position-absolute btn btn-light'>
                          <FontAwesomeIcon icon={faShuffle} />
                        </button>
                      </li>
                      <li>
                        <NavLink className='dropdown-item' to='/lessons'>
                          <span type='button' data-bs-toggle={isCollapse} data-bs-target="#navItems">All Lessons</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className='dropdown-item' to='/lessons'>
                          <span type='button' data-bs-toggle={isCollapse} data-bs-target="#navItems">Favorited</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className='dropdown-item' to='/lessons'>
                          <span type='button' data-bs-toggle={isCollapse} data-bs-target="#navItems">Data Structures</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className='dropdown-item' to='/lessons'>
                          <span type='button' data-bs-toggle={isCollapse} data-bs-target="#navItems">Algorithms</span>
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </div>
                <div className='d-flex ms-lg-auto search-login-wrapper'>
                  {/* Search bar */}
                  <form className='d-flex align-items-center mt-1 me-2 w-100'>
                    <input id='search-input' className='form-control border-0 shadow-none' type='search' placeholder='Search' aria-label='Search'></input>
                    <button type='submit' className='btn shadow-none px-2'>
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                  </form>
                  {/* Signup/login div */}
                  <div className='d-lg-flex ms-auto d-none'>
                    {!isLoading && (user ? (
                      <div className="d-flex align-items-center justify-content-center ms-2">
                        <button className='btn btn-light border-0 rounded-circle p-0'>
                          <img src={require('../../assets/imgs/profile.png')} width='50' height='50' alt='' />
                        </button>
                      </div>
                    ) : (
                      <NavLink to='/login'>
                        <button className='btn btn-light shadow-none' id='signup'>Sign Up</button>
                      </NavLink>
                    ))}
                    {/* <button className='btn btn-light shadow-none' id='login'>Log in</button> */}
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-1'></div>
      </nav>
  );
}