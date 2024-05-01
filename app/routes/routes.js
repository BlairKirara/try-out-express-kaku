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

router.get('/', userController.getIndex);

router.get('/signup', userController.getSignup);

router.post('/signup', userController.postSignup);

router.get('/logout', userController.logOut);

router.post('/login', userController.logIn);

//score routes

// router.post("/score", scoreController.score_create_post);
router.post('/score', scoreController.save_score);

router.get('/scores', scoreController.get_scores);

router.get('/practice/:setId', setController.practiceSet);

router.get('/edit/:setId', setController.editSet);

router.delete('/flashcard/delete/:flashcardId', setController.delete_flashcard);

router.put('/flashcard/update/:flashcardId', setController.update_flashcard);

router.get('/edit_flashcard/:flashcardId', setController.editFlashcard);

router.post('/flashcard/update/:flashcardId', setController.updateFlashcard);

router.post('/quiz_scores/reset/:userId/:level', scoreController.resetQuizScores);

//hiragana routes

router.get('/hiragana', hiraganaController.getHiragana);

router.get('/hiragana/list', hiraganaController.getHiraganaList);

router.get('/hiragana/quiz_lvl', hiraganaController.getHiraganaQuizLvl);

router.get('/hiragana/quiz', hiraganaController.getHiraganaQuiz);

router.get('/hiragana/dakuten_quiz', hiraganaController.getHiraganaDakutenQuiz);

router.get(
  '/hiragana/combinations_quiz',
  hiraganaController.getHiraganaCombinationsQuiz
);

router.get('/hiragana/final_test', hiraganaController.getHiraganaFinalTest);

router.get('/hiragana/converter', hiraganaController.getHiraganaConverter);

router.post('/hiragana/set', setController.save_set);

router.get('/hiragana_sets', setController.get_sets);

router.delete('/hiragana_sets/:setId', setController.delete_set);

// router.post('/hiragana/set_data', hiraganaSetController.save_set_data);

//katakana routes

router.get('/katakana', katakanaController.getKatakana);

router.get('/katakana/list', katakanaController.getKatakanaList);

router.get('/katakana/quiz_lvl', katakanaController.getKatakanaQuizLvl);

router.get('/katakana/quiz', katakanaController.getKatakanaQuiz);

router.get('/katakana/dakuten_quiz', katakanaController.getDakutenQuiz);

router.get(
  '/katakana/combinations_quiz',
  katakanaController.getCombinationsQuiz
);

router.get('/katakana/final_test', katakanaController.getFinalQuiz);

router.get('/katakana/converter', katakanaController.getKatakanaConverter);

router.post('/katakana/set', katakanaSetController.save_set);

router.get('/katakana_sets', katakanaSetController.get_katakana_sets);

//radicals routes

router.get('/radicals', radicalsController.getRadicals);

router.get('/radicals/list', radicalsController.getRadicalsList);

router.get('/radicals/quiz', radicalsController.getRadicalsQuiz);

//about routes

router.get('/about', aboutController.getAbout);

router.get('/about/history', aboutController.getHistory);

module.exports = router;