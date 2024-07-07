import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="container p-0">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">© 2024 LearnDSA</p>

        <NavLink to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <img src={require('../assets/imgs/logo-dark.png')} className='bi me-2' width={100} height={62}></img>
        </NavLink>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item"><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-secondary">Features</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-secondary">Pricing</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-secondary">FAQs</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-secondary">About</a></li>
        </ul>
      </footer>
    </div>
  );
}