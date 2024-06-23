import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import './lessonCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class LessonCard extends React.Component {
  render() {
    const { title, category, description, completion, lessonId } = this.props;

    const progressBarStyle = {
      width: `${completion}%`,
      backgroundColor: completion === '100' ? '#0BDA51' : '', // Change the progress bar color to green if completion is 100%
    };

    return (
      <div className='card p-3 text-dark shadow-pop-bl' id='card-container'>
        <div className='d-flex justify-content-between flex-sm-row flex-column'>
          <div className='d-flex align-items-center'>
            <div className='icon'>
              <img src={require('../../assets/icons/linked-list.svg').default} width={'40px'} alt='Linked List' />
            </div>
            <h2 className='card-title ms-3 m-0'>{title}</h2>
          </div>
          <div className='mt-2'>
            <div className='badge'><span>{category}</span></div>
          </div>
        </div>
        <div className='card-body pb-0'>
          <p className='card-text'>{description}</p>
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={progressBarStyle} aria-valuenow={completion} aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div className='text-muted'><span className='text1'>{completion + '% complete'}</span></div>
          <div className='w-100 d-flex align-items-center'>
            <NavLink to={`${lessonId}`} className='ms-auto btn btn-light'>
              Go to lesson <FontAwesomeIcon icon={faArrowRight} className='ps-2'/>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default LessonCard;