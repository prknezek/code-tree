import React, { useState, useEffect } from 'react';
import LessonBlock from "./LessonBlock";
import axios from 'axios';

import {
  useParams
} from "react-router-dom";

function Lesson() {
  let { lessonId } = useParams();

  const [lessonData, setLessonData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch lesson data from backend
  useEffect(() => {
    const fetchLessonData = async () => {
      axios.post(`http://localhost:4000/api/lessons/${lessonId}`, {
        
      })
      .then(response => {
        console.log('lesson found: ' + lessonId);
        setLessonData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
    };

    fetchLessonData();
  }, [lessonId]);

  // Display loading message while fetching data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display error screen if data fetching fails
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Display lesson data
  return (
    <div className='d-flex justify-content-center align-items-center flex-column container bg-danger w-100 h-100 mt-4 p-0'>
      <LessonBlock lessonId={lessonId} />
    </div>
  );
}

export default Lesson;