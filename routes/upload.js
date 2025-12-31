const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const { uploadPhoto } = require('../controllers/uploadController');

// POST route for uploading photos
router.post('/upload', upload.single('photo'), uploadPhoto);

module.exports = router;