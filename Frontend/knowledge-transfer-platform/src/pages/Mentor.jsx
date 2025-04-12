import React, { useEffect, useState } from "react";
import axios from "axios";

const Mentor = () => {
  const [mentors, setMentors] = useState([]);
  const [today, setToday] = useState("");
  const [bookedMentorId, setBookedMentorId] = useState(null);

  useEffect(() => {
    const currentDay = new Date().toLocaleDateString("en-US", {
      weekday: "long",
    });
    setToday(currentDay);

    axios
      .get("https://data2-e4619-default-rtdb.firebaseio.com/mentors.json")
      .then((res) => {
        const data = res.data || [];
        const mentorsList = Object.values(data);
        setMentors(mentorsList);
      })
      .catch((err) => console.error("Error fetching mentor data:", err));
  }, []);

  const isAvailableToday = (available) => {
    // Extract days like "Monday", "Friday" from the available string
    const days = available.match(/\b(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)\b/g);
    return days?.includes(today);
  };

  const handleBooking = (index) => {
    if (bookedMentorId === index) {
      setBookedMentorId(null);
      alert("Session canceled.");
    } else {
      setBookedMentorId(index);
      alert("Mentor booked!");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Available Mentors on {today}</h1>
      {mentors.filter(m => isAvailableToday(m.available)).length === 0 && (
        <p className="text-center text-gray-600">No mentors available today.</p>
      )}
      <div className="space-y-4">
        {mentors
          .map((m, index) => (
            isAvailableToday(m.available) && (
              <div key={index} className="bg-white shadow-md p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">{m.name}</h2>
                  <p className="text-gray-600">Skill: {m.skill}</p>
                  <p className="text-gray-500 text-sm">Available: {m.available}</p>
                </div>
                <button
                  onClick={() => handleBooking(index)}
                  className={`px-4 py-2 rounded ${
                    bookedMentorId === index ? "bg-red-500" : "bg-green-600"
                  } text-white`}
                >
                  {bookedMentorId === index ? "Cancel" : "Book Session"}
                </button>
              </div>
            )
        ))}
      </div>
    </div>
  );
};

export default Mentor;
