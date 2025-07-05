import Head from 'next/head';

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
        <meta name="description" content={`Quizzes for ${category}`} />
      </Head>
      <div className="p-4">
        <h1 className="text-2xl font-bold capitalize">{category} Quizzes</h1>
        <ul className="mt-4 space-y-2">
          {quizzes.map((quiz) => (
            <li key={quiz.id}>
              <a href={`/quiz/${quiz.id}`} className="block p-4 bg-gray-100 rounded hover:bg-gray-200">{quiz.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
