import axios from 'axios';

export const generateGuideFromAI = async (title, description) => {
  try {
    const prompt = `
You're an expert documentation assistant. Generate a clear, concise, and actionable step-by-step guide based on the following traditional technique:
Title: ${title}
Description: ${description}
Output format:
Step-by-step guide in markdown.
`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const guide = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!guide) {
      throw new Error("No guide text received from Gemini");
    }

    return guide;
  } catch (error) {
    console.error("Gemini 2.0 Flash API Error:", error?.response?.data || error.message);
    return "⚠️ AI failed to generate the guide. Please add manually.";
  }
};

