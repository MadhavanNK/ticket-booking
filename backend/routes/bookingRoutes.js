const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/book', bookingController.bookTicket);
router.delete('/cancel/:id', bookingController.cancelTicket);
router.get('/ticket/:id', bookingController.showTicket);

module.exports = router;
