// Import Libraries
const express = require("express");
const router = express.Router();

// Import Controllers
const noteController = require("../controllers/noteController");
const messageController = require("../controllers/messageController");

// Feedback Route
router.post("/submitFeedback", messageController.submit_feedback);

// Note Routes
router.get("/allNotes", noteController.get_all_notes);
router.post("/addNote", noteController.add_note);
router.get("/noteDetails/:id", noteController.get_one_note);
router.patch("/updateNote/:id", noteController.update_note);
router.delete("/deleteNote/:id", noteController.delete_note);

// Exports
module.exports = router;
