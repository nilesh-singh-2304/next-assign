import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
    <>
      <Head>
        <title>{quiz.title} | Micro-Quiz</title>
        <meta name="description" content={`Take the ${quiz.title} quiz.`} />
      </Head>

      {/* Animated Navbar */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur border-b border-gray-800"
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center text-white">
          <Link href="/" className="text-2xl font-bold text-blue-400">
            MicroQuiz
          </Link>
        </div>
      </motion.nav>

      <div className="pt-24 min-h-screen bg-gray-950 text-gray-200 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl bg-gray-900 rounded-2xl shadow-lg p-6 md:p-10 transition-all duration-300"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-400">{quiz.title}</h1>

          {!completed ? (
            <>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl mb-4 font-medium"
              >
                {current.question}
              </motion.p>

              <div className="grid gap-4">
                {current.options.map((opt) => {
                  const isCorrect = opt === current.correct;
                  const isWrong = selected === opt && opt !== current.correct;
                  const base =
                    "w-full text-left px-5 py-3 rounded-xl text-lg transition duration-300 font-medium";

                  return (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(opt)}
                      disabled={!!selected}
                      className={`${base} 
                        ${selected
                          ? isCorrect
                            ? "bg-green-600 text-white"
                            : isWrong
                            ? "bg-red-600 text-white"
                            : "bg-gray-800 border border-gray-600"
                          : "bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-blue-400"}
                      `}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              <p className="mt-6 text-sm text-gray-400 text-center">
                Question {index + 1} of {quiz.questions.length}
              </p>
            </>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center space-y-4"
            >
              <h2 className="text-2xl font-bold text-green-400">🎉 Quiz Completed!</h2>
              <p className="text-lg md:text-xl">
                You scored <span className="text-blue-400">{score}</span> out of{" "}
                <span className="text-blue-400">{quiz.questions.length}</span>.
              </p>
              <button
                onClick={() => location.reload()}
                className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold transition duration-300"
              >
                Try Again
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  );
}
