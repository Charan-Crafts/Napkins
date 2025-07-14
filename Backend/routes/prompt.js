const express = require('express');
const router = express.Router();
const { generateText, generateImage, getPromptHistory, getPromptById } = require('../controllers/promptController');
const authMiddleware = require('../middlewares/auth');

router.post('/text', authMiddleware, generateText);
router.post('/image', authMiddleware, generateImage);
router.get('/history', authMiddleware, getPromptHistory);
router.get('/:id', authMiddleware, getPromptById);

module.exports = router;
