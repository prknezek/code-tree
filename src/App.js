import Navbar from './components/Navbar/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import "@fontsource/poppins";

import Home from './pages/Home/Home';
import LessonHome from './pages/LessonHome/LessonHome';

function App() {
  return (
    <div className="App">
      <div className='container-fluid p-0'>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/lessons' element={<LessonHome />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
