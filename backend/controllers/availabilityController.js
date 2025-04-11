import Availability from "../models/Availability.js";

// Create or update mentor availability
export const setAvailability = async (req, res) => {
  const { mentorId, availableSlots } = req.body;

  try {
    const updated = await Availability.findOneAndUpdate(
      { mentorId },
      { availableSlots },
      { new: true, upsert: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to set availability" });
  }
};

// Get availability for a mentor
export const getAvailability = async (req, res) => {
  const { mentorId } = req.params;

  try {
    const data = await Availability.findOne({ mentorId });
    res.json(data || { mentorId, availableSlots: [] });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch availability" });
  }
};

// Delete availability slots (optional)
export const clearAvailability = async (req, res) => {
  const { mentorId } = req.params;

  try {
    await Availability.findOneAndDelete({ mentorId });
    res.json({ message: "Availability cleared" });
  } catch (err) {
    res.status(500).json({ error: "Failed to clear availability" });
  }
};
