const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    console.log(req.body);
    res.send("Response received: " + req.body);
});

module.exports = router;