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
            {/* Lesson Scroller */}

            <div id='block-guy'>
              <h1>Learn DS&A, the easy way</h1>
            </div>
            <div id='lesson-swiper-container' className='bg-light'>
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
