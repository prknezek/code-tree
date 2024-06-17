import Navbar from './Navbar/Navbar';
import LessonSwiper from './LessonSwiper/LessonSwiper';

import './App.css';
import "@fontsource/poppins";

function App() {
  return (
    <div className="App">
      <div className='container-fluid p-0'>
        {/* Navbar */}
        <Navbar />
        {/* Main content container */}
        <div className='row w-100'>
          <div className='col-1'></div>
          {/* Main content */}
          <div className='col-10'>
            <div className='d-flex bg-warning p-2 align-items-center'>
              <h1 className='m-0'>Featured Lessons:</h1>
            </div>
            {/* Lesson Scroller */}
            <div id='lesson-swiper-container'>
              <LessonSwiper />
            </div>
          </div>
          <div className='col-1'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
