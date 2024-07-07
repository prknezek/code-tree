import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
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
          <div className='row w-100'>
            <div className='col-1'></div>
            <div className='col-10'>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/lessons' element={<LessonHome />} />
                <Route path='lessons/:lessonId' element={<Child />} />
              </Routes>
              <Footer />
            </div>
            <div className='col-1'></div>
          </div>
        </Router>
      </div>
    </div>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { lessonId } = useParams();

  return (
    <div>
      <h3>ID: {lessonId}</h3>
    </div>
  );
}

export default App;
