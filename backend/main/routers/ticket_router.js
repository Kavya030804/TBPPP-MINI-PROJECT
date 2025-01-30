const express = require('express');
const router = express.Router();

// /book route
router.get('/book', (req, res) => {
  res.json({
    message: 'Welcome to the Book Page! Here you can book your tickets.',
  });
});

// /check-in route
router.get('/check-in', (req, res) => {
  res.json({
    message: 'Check-In Page! Manage your check-in here.',
  });
});

//  /my-trips route
router.get('/my-trips', (req, res) => {
  res.json({
    message: 'My Trips Page! View and manage your trips here.',
  });
});

//  /flight-status route
router.get('/flight-status', (req, res) => {
  res.json({
    message: 'Flight Status Page! Check flight updates here.',
  });
});

// route for errors or unknown routes
router.all('*', (req, res) => {
  res.status(404).json({ message: 'Page not found!' });
});

module.exports = router;
