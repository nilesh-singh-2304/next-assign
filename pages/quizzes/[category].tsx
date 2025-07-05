import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export async function getServerSideProps(context) {
  const { category } = context.params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/quizzes/${category}`);
  const quizzes = await res.json();
  return { props: { quizzes, category } };
}

export default function QuizCategoryPage({ quizzes, category }) {
  return (
    <>
      <Head>
        <title>{category} Quizzes</title>
        <meta name="description" content={`Quizzes for ${category}`} />
      </Head>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur border-b border-gray-800"
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center text-white">
          <Link href="/" className="text-2xl font-bold text-blue-400">MicroQuiz</Link>
        </div>
      </motion.nav>

      <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-4 md:px-10 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-blue-300 mb-6">{category} Quizzes</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {quizzes.map((quiz, index) => (
              <motion.div
                key={quiz.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/quiz/${quiz.id}`}>
                  <div className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl shadow-md transition cursor-pointer h-full">
                    <h2 className="text-xl font-semibold text-blue-300">{quiz.title}</h2>
                    <p className="text-gray-400 mt-2 text-sm">{quiz.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 text-sm opacity-60 py-6">
        Built with 💙 using Next.js & Tailwind | MicroQuiz © 2025
      </footer>
    </>
  );
}
