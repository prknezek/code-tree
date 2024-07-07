require('dotenv').config();

const express = require('express');
const router = express.Router();
const axios = require('axios');
const pool = require('../database');

router.post('/api/auth/google', async (req, res) => {
  const { code } = req.body;
  const client_id = process.env.REACT_APP_OAUTH_CLIENT_ID;
  const client_secret = process.env.REACT_APP_OAUTH_CLIENT_SECRET;
  const redirect_uri = process.env.REACT_APP_OAUTH_REDIRECT_URI;
  const grant_type = 'authorization_code';

  const oAuthResponse = await axios.post('https://oauth2.googleapis.com/token', new URLSearchParams({
    code,
    client_id,
    client_secret,
    redirect_uri,
    grant_type,
  }), {
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
  },
  })
  .catch(error => {
      console.error('Token exchange error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  });

  const { access_token, refresh_token } = oAuthResponse.data;
  const userInfoResponse = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`);
  const userProfile = userInfoResponse.data;

  res.json({
    access_token,
    refresh_token,
    profile: userProfile,
  });
});

// Lesson data route
router.post('/api/lessons/:lessonId', async (req, res) => {
  const { lessonId } = req.params;

  try {
    const lessonResponse = await pool.query('SELECT * FROM lessons WHERE id = $1', [lessonId]);

    if (lessonResponse.rows.length === 0) {
      return res.status(404).json({ error: 'Lesson not found' });
    }

    const lesson = lessonResponse.rows[0];
    res.json(lesson);
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Insert lesson route
router.post('/api/lessons', async (req, res) => {
  const { type, title, description } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO lessons (id, type, title, description, created_at, updated_at) VALUES (gen_random_uuid(), $1, $2, $3, NOW(), NOW()) RETURNING *`,
      [type, title, description]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Database insertion error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create user route
router.post('/api/users', async (req, res) => {
  const { email, google_id, img } = req.body;

  try {
    let user = {};
    const userQuery = await pool.query('SELECT * FROM users WHERE google_id = $1', [google_id]);

    if (userQuery.rows.length > 0) {
      // User already exists
      user = userQuery.rows[0];
      console.log('User already exists:', user);
    } else {
      // Create new user
      const result = await pool.query(
        `INSERT INTO users (email, google_id, img, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *`,
        [email, google_id, img]
      );

      user = result.rows[0];
      console.log('New user created:', user);
    }

    res.status(201).json(user);
  } catch (error) {
    console.error('Full error object:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to update user progress
router.post('/api/lessons/:lessonId/progress', async (req, res) => {
  const { lessonId } = req.params;
  const { userId, progress } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO user_lesson_progress (user_id, lesson_id, progress, created_at, updated_at)
      VALUES ($1, $2, $3, NOW(), NOW())
      ON CONFLICT (user_id, lesson_id)
      DO UPDATE SET progress = EXCLUDED.progress, updated_at = NOW()
      RETURNING *`,
      [userId, lessonId, progress]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Database insertion error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;