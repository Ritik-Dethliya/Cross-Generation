export const evaluateAssessment = (userAnswers, questions) => {
    let score = 0;
  
    questions.forEach((q, idx) => {
      if (userAnswers[idx] === q.correctAnswer) score++;
    });
  
    return {
      score,
      total: questions.length,
      passed: score >= Math.ceil(questions.length * 0.6) // 60% pass
    };
  };
  