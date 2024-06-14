import './App.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShuffle, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className='container-fluid p-0'>
        {/* Navbar */}
        <nav className='navbar navbar-light bg-light border-bottom border-2 text-dark'>
          <div className='row w-100'>
            <div className='col-1'></div>
            <div className='col-10'>
              <div className='d-flex align-items-center'>
                {/* Logo */}
                <a className='navbar-brand' href='#'>
                  <img src={require('./logo-inverted.png')} width='80' height='50' className='d-inline-block align-top ms-2' alt='' />
                </a>
                {/* Main nav links */}
                <div className='d-flex me-auto align-items-center'>
                  <a className='nav-link' href='#'>
                    <span className='h6 text-dark'>Dashboard</span>
                  </a>
                  <div className='dropdown'>
                    <a class="nav-link" href="#" id="tutorialDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span class="h6 dropdown-toggle text-dark">Lessons</span>
                    </a>
                    <ul className='dropdown-menu' aria-labelledby='tutorialDropdown'>
                      <li className='d-flex justify-content-end me-2'>
                        <button className='position-absolute btn btn-light'>
                          <FontAwesomeIcon icon={faShuffle} />
                        </button>
                      </li>
                      <li><a className='dropdown-item' href='#'>All Lessons</a></li>
                      <li><a className='dropdown-item' href='#'>Saved</a></li>
                      <li><a className='dropdown-item' href='#'>Data Structures</a></li>
                      <li><a className='dropdown-item' href='#'>Algorithms</a></li>
                    </ul>
                  </div>
                  <a className='nav-link' href='#'>
                    <span className='h6 text-dark'>Flashcards</span>
                  </a>
                </div>
                {/* Search bar */}
                <form className='d-flex align-items-center mt-1 me-2'>
                  <input id='search-input' className='form-control border-0 shadow-none' type='search' placeholder='Search lessons' aria-label='Search'></input>
                  <button type='submit' className='btn shadow-none px-2'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </form>
                {/* Signup/login div */}
                <div className='d-flex'>
                  <button className='btn btn-light shadow-none' id='signup'>Sign Up</button>
                  <button className='btn btn-light shadow-none' id='login'>Log in</button>
                </div>
              </div>
            </div>
            <div className='col-1'></div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
