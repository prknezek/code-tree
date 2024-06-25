import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <div class="container p-0">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-4 mb-0 text-body-secondary">© 2024 LearnDSA</p>

        <NavLink to="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <img src={require('../../assets/imgs/logo-dark.png')} className='bi me-2' width={100} height={62}></img>
        </NavLink>

        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item"><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-secondary">Features</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-secondary">Pricing</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-secondary">FAQs</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-secondary">About</a></li>
        </ul>
      </footer>
    </div>
  );
}