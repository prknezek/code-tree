import './App.css';

function App() {
  return (
    <div className="App">
      <nav className='navbar navbar-light bg-light'>
        <a className='navbar-brand' href='#'>
          <img src={require('./logo-inverted.png')} width='80' height='50' style={{margin: "0 10px"}} className='d-inline-block align-top' alt='' />
        </a>
        
      </nav>
    </div>
  );
}

export default App;
