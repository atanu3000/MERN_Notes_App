// Import Model
const Message = require("../models/message");

// Controllers

// To submit message through contact form
const submit_feedback = (req, res) => {
  let message = new Message(req.body);
  message
    .save()
    .then((result) => {
      res.json({ msg: "Thank you for your feedback!" });
    })
    .catch((error) => res.json({ msg: error.message }));
};

// Exports
module.exports = { submit_feedback };
