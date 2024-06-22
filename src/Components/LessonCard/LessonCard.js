import React from 'react';

import './lessonCard.css';

class LessonCard extends React.Component {
  render() {
    return (
      <div className='card p-3 text-dark' style={{width: '35rem'}}>
        <div className='d-flex justify-content-between'>
          <div className='d-flex align-items-center'>
            <div className='icon'></div>
            <div className='ms-3 m-0'>
              <h2 className='card-title'>{this.props.title}</h2>
            </div>
          </div>
          <div className='badge'><span>{this.props.category}</span></div>
        </div>
        <div className='card-body pb-0'>
          <p className='card-text'>{this.props.description}</p>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{width: `${this.props.completion}%`}} aria-valuenow={this.props.completion} aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div className='text-muted'><span className='text1'>{this.props.completion + '% complete'}</span></div>
        </div>
      </div>
    );
  }
}

export default LessonCard;