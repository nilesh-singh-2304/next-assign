import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

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
        <meta name="description" content="Take short quizzes by topic. Test your knowledge!" />
      </Head>
      <div className="grid grid-cols-2 md:grid-cols-4 p-4 gap-4">
        {categories.map(cat => (
          <Link key={cat.slug} href={`/quizzes/${cat.slug}`}>
            <div className="bg-white shadow-md rounded p-4 text-center hover:bg-blue-100 transition cursor-pointer">
              <Image src={cat.icon} alt={cat.name} width={80} height={80} />
              <h2 className="mt-2 text-lg text-black font-semibold">{cat.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
