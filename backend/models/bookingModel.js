const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  movieName: { type: String, required: true },
  time: { type: String, required: true },
  seatNo: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  payment: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
