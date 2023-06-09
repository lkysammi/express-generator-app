/* JavaScript File: index.js
   Student Name: Ka Ying Leung
   Student ID: 301245290
   Date: 14 June 2023 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

/* GET About me page. */
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About Me' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'My Projects' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'My Services' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});


module.exports = router;
