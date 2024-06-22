import React from 'react';

import './lessonCard.css';

class LessonCard extends React.Component {
  render() {
    return (
      <div class="card p-3 mb-2 text-dark col-4">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row align-items-center">
            <div class="icon"> <i class="bx bxl-mailchimp"></i> </div>
              <div class="ms-2 c-details">
                <h6 class="mb-0">Mailchimp</h6> <span>1 days ago</span>
              </div>
            </div>
            <div class="badge"> <span className='px-5'>Design</span> </div>
        </div>
        <div class="mt-5">
          <h3 class="card-title">SUCKER Product<br></br>Designer-Singapore</h3>
          <div class="mt-5">
            <div class="progress">
              <div class="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="mt-3"> <span class="text1">32 Applied <span class="text2">of 50 capacity</span></span> </div>
          </div>
        </div>
      </div>
      // <div className="lesson-card">
      //   <h2>{this.props.title}</h2>
      //   <p>{this.props.description}</p>
      //   <p>{this.props.date}</p>
      // </div>
    );
  }
}

export default LessonCard;