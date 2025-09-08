// app.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Connect to MongoDB (use your connection string here)
mongoose
  .connect(
    "mongodb+srv://adityaedq:cWQojCYIYIKWeEFt@seharicluster.4hvwddk.mongodb.net/sehariDB?retryWrites=true&w=majority&appName=SehariCluster",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define the Event schema and model
const eventSchema = new mongoose.Schema({
  eventName: String,
  eventDate: Date,
  eventVenue: String,
  guestCount: Number,
  eventNotes: String,
});

const Event = mongoose.model("Event", eventSchema);

// Create Event API
app.post("/api/events", async (req, res) => {
  const { eventName, eventDate, eventVenue, guestCount, eventNotes } = req.body;

  const newEvent = new Event({
    eventName,
    eventDate,
    eventVenue,
    guestCount,
    eventNotes,
  });

  try {
    await newEvent.save();
    res.status(201).send("Event created successfully!");
  } catch (err) {
    res.status(400).send("Error creating event: " + err.message);
  }
});

// Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
