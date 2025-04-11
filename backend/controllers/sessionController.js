import Session from "../models/Session.js";

export const createSession = async (req, res) => {
  const { mentorId, learnerId, scheduledAt, durationMinutes } = req.body;
  try {
    const session = new Session(req.body);
    await session.save();
    res.status(201).json(session);
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: "Could not create session" });
  }
};

export const getUserSessions = async (req, res) => {
  const { userId } = req.params;

  try {
    const sessions = await Session.find({
      $or: [{ mentorId: userId }, { learnerId: userId }],
    }).sort({ scheduledAt: 1 }); // Optional: Sort by upcoming first

    res.status(200).json(sessions);
  } catch (err) {
    console.error("Error fetching user sessions:", err);
    res.status(500).json({ error: "Could not fetch sessions" });
  }
};
