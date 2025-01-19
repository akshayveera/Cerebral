const router = require('express').Router();
const { getComponent2, getComponent4, getComponent6 } = require('./controller');

router.get('/component2', getComponent2);
router.get('/component4', getComponent4);
router.get('/component6', getComponent6);

module.exports = router;