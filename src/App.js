import './App.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuffle, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className='navbar fixed-top navbar-light bg-light border-bottom border-2 text-dark'>
        <a className='navbar-brand' href='#'>
          <img src={require('./logo-inverted.png')} width='80' height='50' className='d-inline-block align-top ms-2' alt='' />
        </a>
        {/* Main nav links */}
        <div className='me-auto d-flex align-items-center'>
          {/* Dashboard */}
          <a class='nav-link' href='#'>
            <span className='h6 text-dark'>Dashboard</span>
          </a>
          {/* Tutorials Dropdown */}
          <div class="dropdown me-auto">
            <a class="nav-link" href="#" id="tutorialDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span class="h6 dropdown-toggle text-dark">Lessons</span>
            </a>
            <ul class="dropdown-menu" aria-labelledby="tutorialDropdown">
              <li class='d-flex justify-content-end me-2'>
                <button class='position-absolute btn btn-light'>
                  <FontAwesomeIcon icon={faShuffle} />
                </button>
              </li>
              <li><a class='dropdown-item' href='#'>All Lessons</a></li>
              <li><a class="dropdown-item" href="#">Saved</a></li>
              <li><a class="dropdown-item" href="#">Data Structures</a></li>
              <li><a class="dropdown-item" href="#">Algorithms</a></li>
            </ul>
          </div>
          {/* Flashcards */}
          <a class='nav-link' href='#'>
            <span className='h6 text-dark'>Flashcards</span>
          </a>
        </div>
        {/* Search bar */}
        <form class='d-flex align-items-center mt-1 me-3'>
            <input id='search-input' class="form-control border-0 shadow-none" type="search" placeholder="Search lessons" aria-label="Search"></input>
            <button type='submit' class='btn shadow-none px-2'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        {/* Signup/login div */}
        <div className='d-flex me-3'>
          <button class='btn btn-light shadow-none' id='signup'>
            Sign Up
          </button>
          <button class='btn btn-light shadow-none' id='login'>
            Log in
          </button>
        </div>
      </nav>
    </div>
  );
}

export default App;
