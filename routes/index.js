var express = require('express');
var router = express.Router();

// Home route
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

// About Me route
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

// Projects route
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

// Contact route
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
