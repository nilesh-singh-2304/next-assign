import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`);
  const categories = await res.json();
  return { props: { categories } };
}

export default function Home({ categories }) {
  return (
    <>
      <Head>
        <title>Micro-Quiz Platform</title>
        <meta name="description" content="Test your knowledge with short quizzes on various topics!" />
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
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
            <Link href="#quizzes" className="hover:text-white transition">Categories</Link>
            <Link href="/about" className="hover:text-white transition">About</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>
      </motion.nav>

      <div className="pt-24 min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-4 md:px-10 py-8">
        {/* Header + Hero */}
        <div className="max-w-6xl mx-auto text-center mb-14">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-400 drop-shadow mb-4"
          >
            Ignite Your Curiosity ✨
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Choose a category and challenge your brain with short, sharp quizzes across topics you love.
          </motion.p>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8"
          >
            <Link
              href="#quizzes"
              className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-xl shadow-md hover:bg-blue-700 transition duration-300"
            >
              Start Exploring →
            </Link>
          </motion.div>
        </div>

        {/* Quiz Category Grid */}
        <section id="quizzes" className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.1 }}
            variants={{
              hidden: {},
              visible: {}
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {categories.map((cat, i) => (
              <motion.div
                key={cat.slug}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <Link href={`/quizzes/${cat.slug}`}>
                  <div className="group relative h-64 bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-blue-500/50 hover:scale-[1.03] transition duration-300 cursor-pointer">
                    <Image
                      src={cat.icon}
                      alt={cat.name}
                      fill
                      className="object-cover brightness-50 group-hover:brightness-75 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-xs hover:backdrop-blur-none flex items-center justify-center p-4">
                      <h2 className="text-2xl font-semibold text-blue-300 group-hover:text-blue-400 text-center drop-shadow-lg">
                        {cat.name}
                      </h2>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto mt-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-blue-300 mb-4">
              New quizzes every week 🔥
            </h3>
            <p className="text-gray-400 text-lg mb-6">
              We're constantly adding exciting new topics to keep your brain sharp. Stay tuned!
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 transition duration-300">
              Join Our Newsletter
            </button>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="mt-24 text-center text-gray-500 text-sm opacity-60">
          Built with 💙 using Next.js & Tailwind | MicroQuiz © 2025
        </footer>
      </div>
    </>
  );
}
