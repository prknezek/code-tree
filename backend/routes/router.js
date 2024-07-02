require('dotenv').config();
console.log(process.env);
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/api/auth/google', (req, res) => {
  const { code } = req.body;
  const client_id = process.env.REACT_APP_OAUTH_CLIENT_ID;
  const client_secret = process.env.REACT_APP_OAUTH_CLIENT_SECRET;
  const redirect_uri = process.env.REACT_APP_OAUTH_REDIRECT_URI;
  const grant_type = 'authorization_code';

  axios.post('https://oauth2.googleapis.com/token', new URLSearchParams({
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
  .then(response => {
      res.json(response.data);
  })
  .catch(error => {
      console.error('Token exchange error:', error);
      console.log(process.env.REACT_APP_OAUTH_CLIENT_ID);
      console.log(process.env.REACT_APP_OAUTH_CLIENT_SECRET);
      res.status(500).json({ error: 'Internal Server Error' });
  });
});

module.exports = router;