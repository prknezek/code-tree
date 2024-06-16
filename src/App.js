import './App.css';

import Navbar from './Navbar/Navbar';
import LessonSwiper from './LessonSwiper/LessonSwiper';

function App() {
  return (
    <div className="App">
      <div className='container-fluid p-0'>
        {/* Navbar */}
        <Navbar />
        {/* Lesson Scroller */}
        <div className='row w-100'>
          <div className='col-1'></div>
          <div className='col-10'>
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
