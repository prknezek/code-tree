import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import "@fontsource/poppins";

import Home from './pages/Home/Home';
import LessonHome from './pages/LessonHome/LessonHome';
import Lesson from './components/LessonComponents/Lesson';
import InsertLesson from './forms/InsertLesson';

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
                <Route path='lessons/:lessonId' element={<Lesson />} />
                <Route path='/insert-lesson' element={<InsertLesson />} />
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

export default App;
