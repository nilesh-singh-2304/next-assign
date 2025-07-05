import { useState } from 'react';

export async function getServerSideProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/quiz/${params.id}`);
  const quiz = await res.json();
  return { props: { quiz } };
}

export default function QuizPage({ quiz }) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [completed, setCompleted] = useState(false);

  const current = quiz.questions[index];

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === current.correct) setScore(score + 1);
    setTimeout(() => {
      setSelected(null);
      if (index + 1 < quiz.questions.length) {
        setIndex(index + 1);
      } else {
        setCompleted(true);
      }
    }, 1000);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{quiz.title}</h1>
      {!completed ? (
        <>
          <p className="mb-4 text-lg">{current.question}</p>
          <div className="space-y-2">
            {current.options.map(opt => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className={`block w-full p-3 rounded text-left ${
                  selected ? (opt === current.correct ? 'bg-green-300' : opt === selected ? 'bg-red-300' : 'bg-gray-100') : 'bg-gray-100'
                }`}
                disabled={!!selected}
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div>
          <p className="text-xl">🎉 Your score: {score}/{quiz.questions.length}</p>
        </div>
      )}
    </div>
  );
}
