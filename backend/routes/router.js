require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');

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

module.exports = router;