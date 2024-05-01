const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const hiraganaController = require('../controllers/hiraganaController');
const katakanaController = require('../controllers/katakanaController');
const radicalsController = require('../controllers/radicalsController');
const aboutController = require('../controllers/aboutController');
const scoreController = require('../controllers/scoreController');
const setController = require('../controllers/setController');
const katakanaSetController = require('../controllers/katakanaSetController');

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/');
  }
}

function ensureNotAuthenticated(req, res, next) {
  if (!req.isAuthenticated()) {
    return next(); 
  } else {
    res.redirect('/');
  }
}

router.get('/', userController.getIndex);

router.get('/signup', ensureNotAuthenticated, userController.getSignup);

router.post('/signup', ensureNotAuthenticated, userController.postSignup);

router.get('/logout', userController.logOut);

router.post('/login', userController.logIn);

//score and flashcard routes

router.post('/score', ensureAuthenticated, scoreController.save_score);

router.get('/scores', ensureAuthenticated, scoreController.get_scores);

router.get('/practice/:setId', ensureAuthenticated, setController.practiceSet);

router.post('/quiz_scores/reset/:userId/:level', ensureAuthenticated, scoreController.resetQuizScores);

//hiragana routes

router.get('/hiragana', hiraganaController.getHiragana);

router.get('/hiragana/list', hiraganaController.getHiraganaList);

router.get('/hiragana/quiz_lvl', ensureAuthenticated, hiraganaController.getHiraganaQuizLvl);

router.get('/hiragana/quiz', ensureAuthenticated, hiraganaController.getHiraganaQuiz);

router.get('/hiragana/dakuten_quiz', ensureAuthenticated, hiraganaController.getHiraganaDakutenQuiz);

router.get('/hiragana/combinations_quiz', ensureAuthenticated, hiraganaController.getHiraganaCombinationsQuiz);

router.get('/hiragana/final_test', ensureAuthenticated, hiraganaController.getHiraganaFinalTest);

router.get('/hiragana/converter', ensureAuthenticated, hiraganaController.getHiraganaConverter);

router.post('/hiragana/set', ensureAuthenticated, setController.save_set);

router.get('/hiragana_sets', ensureAuthenticated, setController.get_sets);

router.delete('/hiragana_sets/:setId', ensureAuthenticated, setController.delete_set);

router.get('/edit/:setId', ensureAuthenticated, setController.editSet);

router.delete('/flashcard/delete/:flashcardId', ensureAuthenticated, setController.delete_flashcard);

router.put('/flashcard/update/:flashcardId', ensureAuthenticated, setController.update_flashcard);

router.get('/edit_hiragana_flashcard/:flashcardId', ensureAuthenticated, setController.editFlashcard);

router.post('/flashcard/update/:flashcardId', ensureAuthenticated, setController.updateFlashcard);

//katakana routes

router.get('/katakana', katakanaController.getKatakana);

router.get('/katakana/list', katakanaController.getKatakanaList);

router.get('/katakana/quiz_lvl', ensureAuthenticated, katakanaController.getKatakanaQuizLvl);

router.get('/katakana/quiz', ensureAuthenticated, katakanaController.getKatakanaQuiz);

router.get('/katakana/dakuten_quiz', ensureAuthenticated, katakanaController.getDakutenQuiz);

router.get('/katakana/combinations_quiz', ensureAuthenticated, katakanaController.getCombinationsQuiz);

router.get('/katakana/final_test', ensureAuthenticated, katakanaController.getFinalQuiz);

router.get('/katakana/converter', ensureAuthenticated, katakanaController.getKatakanaConverter);

router.post('/katakana/set', ensureAuthenticated, katakanaSetController.save_set);

router.get('/katakana_sets', ensureAuthenticated, katakanaSetController.get_katakana_sets);

router.delete('/katakana_sets/:setId', ensureAuthenticated, katakanaSetController.delete_katakana_set);

router.get('/edit_katakana_set/:setId', ensureAuthenticated, katakanaSetController.editKatakanaSet);

router.delete('/katakana_flashcard/delete/:flashcardId', ensureAuthenticated, katakanaSetController.delete_katakana_flashcard);

router.put('/katakana_flashcard/update/:flashcardId', ensureAuthenticated, katakanaSetController.update_katakana_flashcard);

router.get('/edit_katakana_flashcard/:flashcardId', ensureAuthenticated, katakanaSetController.editKatakanaFlashcard);

router.post('/katakana_flashcard/update/:flashcardId', ensureAuthenticated, katakanaSetController.updateKatakanaFlashcard);

router.get('/katakana_practice/:setId', ensureAuthenticated, katakanaSetController.practiceKatakanaSet);

//radicals routes

router.get('/radicals', radicalsController.getRadicals);

router.get('/radicals/list', radicalsController.getRadicalsList);

router.get('/radicals/quiz', ensureAuthenticated, radicalsController.getRadicalsQuiz);

//about routes

router.get('/about', aboutController.getAbout);

router.get('/about/history', aboutController.getHistory);

module.exports = router;