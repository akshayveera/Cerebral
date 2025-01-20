const router = require('express').Router();
const { getComponent2, getComponent4, getComponent6, getComponent1, getComponent3, getComponent5, login } = require('./controller');

router.get('/component2', getComponent2);
router.get('/component4', getComponent4);
router.get('/component6', getComponent6);
router.get('/component1', getComponent1);
router.get('/component3', getComponent3);
router.get('/component5', getComponent5);
router.post('/login', login );

router.use((req, res, next) => {
    res.status(404).send('Route not found');
});

module.exports = router;