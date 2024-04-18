const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const hiraganaController = require('../controllers/hiraganaController');
const katakanaController = require('../controllers/katakanaController');
const radicalsController = require('../controllers/radicalsController');
const aboutController = require('../controllers/aboutController');





router.get('/', userController.getIndex);

router.get('/signup', userController.getSignup);

router.post('/signup', userController.postSignup);

router.get('/logout', userController.logOut);

router.post('/login', userController.logIn);

router.get('/hiragana', hiraganaController.getHiragana);

router.get('/katakana', katakanaController.getKatakana);

router.get('/radicals', radicalsController.getRadicals);

router.get('/about', aboutController.getAbout);



module.exports = router;
