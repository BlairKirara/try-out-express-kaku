const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const hiraganaController = require('../controllers/hiraganaController');
const katakanaController = require('../controllers/katakanaController');
const radicalsController = require('../controllers/radicalsController');
const aboutController = require('../controllers/aboutController');
const scoreController = require('../controllers/scoreController');


router.get('/', userController.getIndex);

router.get('/signup', userController.getSignup);

router.post('/signup', userController.postSignup);

router.get('/logout', userController.logOut);

router.post('/login', userController.logIn);

//score routes

router.post("/score/create", scoreController.score_create_post);

//hiragana routes

router.get('/hiragana', hiraganaController.getHiragana);

router.get('/hiragana/list', hiraganaController.getHiraganaList);

router.get('/hiragana/quiz_lvl', hiraganaController.getHiraganaQuizLvl);

//katakana routes

router.get('/katakana', katakanaController.getKatakana);

router.get('/katakana/list', katakanaController.getKatakanaList);

router.get('/katakana/quiz_lvl', katakanaController.getKatakanaQuizLvl);

router.get('/katakana/quiz', katakanaController.getKatakanaQuiz);

router.get('/katakana/dakuten_quiz', katakanaController.getDakutenQuiz);

router.get('/katakana/combinations_quiz', katakanaController.getCombinationsQuiz);

router.get('/katakana/final_test', katakanaController.getFinalQuiz);

//radicals routes

router.get('/radicals', radicalsController.getRadicals);

router.get('/radicals/list', radicalsController.getRadicalsList);

//about routes

router.get('/about', aboutController.getAbout);

router.get('/about/history', aboutController.getHistory);




module.exports = router;
