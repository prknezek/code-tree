import Navbar from './Components/Navbar/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import "@fontsource/poppins";

import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <div className='container-fluid p-0'>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
