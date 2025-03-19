const Ticket = require("../models/Ticket");

exports.createTicket = async (req, res) => {
  try {
    const { title, description } = req.body;
    const ticket = new Ticket({ user: req.user.id, title, description });
    await ticket.save();
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};

exports.getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ user: req.user.id });
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};

exports.updateTicket = async (req, res) => {
  try {
    const { status } = req.body;
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};

exports.deleteTicket = async (req, res) => {
  try {
    await Ticket.findByIdAndDelete(req.params.id);
    res.json({ msg: "Ticket Deleted" });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};
