import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export async function getServerSideProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/quizzes/${params.category}`);
  const quizzes = await res.json();
  return { props: { quizzes, category: params.category } };
}

export default function CategoryPage({ quizzes, category }) {
  return (
    <>
      <Head>
        <title>{category} Quizzes</title>
        <meta name="description" content={`Browse quizzes for ${category}`} />
      </Head>

      <div className="min-h-screen bg-gray-950 text-gray-200 py-10 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-blue-400 capitalize mb-6"
          >
            {category} Quizzes
          </motion.h1>

          {quizzes.length === 0 ? (
            <p className="text-gray-400">No quizzes available.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {quizzes.map((quiz, i) => (
                <Link href={`/quiz/${quiz.id}`} key={quiz.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="relative h-52 rounded-xl bg-gray-800 overflow-hidden shadow-md hover:shadow-blue-500/50 hover:scale-[1.03] transition duration-300 cursor-pointer"
                  >
                    <Image
                      src="/images/quiz-bg.png" // Or you can pass dynamic backgrounds later
                      alt={quiz.title}
                      fill
                      className="object-cover brightness-50 group-hover:brightness-75 transition"
                    />
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
                      <h2 className="text-xl font-semibold text-blue-300 group-hover:text-blue-400 text-center drop-shadow">
                        {quiz.title}
                      </h2>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
