import React, { useState } from 'react';
import axios from 'axios';

function InsertLesson() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:4000/api/lessons', {
        type,
        title,
        description
      });
      setMessage(`Lesson inserted: ${response.data.title}`);
    } catch (error) {
      setMessage('Error inserting lesson');
    }
  };

  return (
    <div>
      <h2>Insert Lesson</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value=''>Select lesson type</option>
            <option value='Data Structure'>Data Structure</option>
            <option value='Algorithm'>Algorithm</option>
          </select>
        </div>
        <button type="submit">Insert Lesson</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default InsertLesson;
