import Navbar from './Components/Navbar/Navbar';
import LessonSwiper from './Components/LessonSwiper/LessonSwiper';
import Footer from './Components/Footer/Footer';

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
            {/* Introduction */}
            <div id='intro-container' className='w-100 d-flex flex-lg-row flex-column p-lg-4 p-3'>
              <div className='col-lg-7 pe-lg-4'>
                <h1 className='mb-4 d-none d-md-block'>Learn DS&A, the easy way</h1>
                <h3 className='mb-3'>Welcome to <span>LearnDSA</span>, your one-stop destination for mastering Data Structures and Algorithms.</h3>
              </div>
              {/* Introduction Image */}
              <div className='card bg-light col-lg-5 h-100'>
                
              </div>
            </div>
            <hr></hr>
            {/* Lesson Scroller */}
            <div id='lesson-swiper-container'>
              <LessonSwiper />
            </div>
            <hr></hr>
            {/* Footer */}
            <Footer />
          </div>
          <div className='col-1'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
