const express = require('express');
const router = express.Router();
const controllers = require('../../controllers/api/v1Controller');

router.post('/savepreset', controllers.savePreset);
router.get('/getpresets', controllers.getPresets);

module.exports = router;