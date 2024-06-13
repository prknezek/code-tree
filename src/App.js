import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className='navbar fixed-top navbar-light bg-light border-bottom border-2 text-dark'>
        <a className='navbar-brand' href='#'>
          <img src={require('./logo-inverted.png')} width='80' height='50' className='d-inline-block align-top ms-2' alt='' />
        </a>
        {/* Tutorials Dropdown */}
        <div class="dropdown me-auto">
          <a class="nav-link" href="#" id="tutorialDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="h6 dropdown-toggle text-dark">Tutorials</span>
          </a>
          <ul class="dropdown-menu" aria-labelledby="tutorialDropdown">
            <li><a class="dropdown-item" href="#">Linked Lists</a></li>
            <li><a class="dropdown-item" href="#">Arrays</a></li>
            <li><a class="dropdown-item" href="#">Sorting</a></li>
          </ul>
        </div>

        {/* Signup/login div */}
        <div className='d-inline-block'>
          <button className='btn bg-light ms-2'>
            Sign Up
          </button>
          <button className='btn bg-light me-2'>
            Login
          </button>
        </div>
      </nav>
    </div>
  );
}

export default App;
