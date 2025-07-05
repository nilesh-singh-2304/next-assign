const quizzes = {
  "1": {
    title: "World War Quiz",
    questions: [
      {
        question: "When did WWII start?",
        options: ["1914", "1920", "1939", "1945"],
        correct: "1939"
      }
    ]
  }
};
export default function handler(req, res) {
  const { id } = req.query;
  res.status(200).json(quizzes[id]);
}
