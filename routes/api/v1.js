const express = require('express');
const router = express.Router();
const controllers = require('../../controllers/api/v1Controller');

router.post('/savepreset', controllers.savePreset);
router.post('/getpresets', controllers.getPresets);
router.post('/getpresetbyid', controllers.getPresetById);

module.exports = router;