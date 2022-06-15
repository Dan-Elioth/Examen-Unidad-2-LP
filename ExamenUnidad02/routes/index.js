var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/main', function(req, res, next) {
  res.render('main');
});

router.get('/new-nuevoc', function(req, res, next) {
  res.render('nuevoc/new');
});

router.get('/tramite-tramitedo', function(req, res, next) {
  res.render('tramitedo/tramite');
});


module.exports = router;

