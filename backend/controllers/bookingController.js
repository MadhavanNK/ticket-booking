const Booking = require('../models/bookingModel');
const nodemailer = require('nodemailer');

// Booking a ticket
exports.bookTicket = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
      }
    });

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: booking.email,
      subject: 'Ticket Confirmation',
      text: `Hello ${booking.name},\n\nYour ticket for "${booking.movieName}" at ${booking.time} is confirmed.\nSeat No: ${booking.seatNo}\n\nThank you!`
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Ticket booked successfully', booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Cancel a booking
exports.cancelTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findByIdAndDelete(id);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json({ message: 'Booking cancelled successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Show ticket details
exports.showTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json({ booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
