import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useGlobalContext } from '../context/globalCtx';
import { ActionType } from '../context/globalReducer';

export default function Home() {
  const router = useRouter();
  const { state, dispatch } = useGlobalContext();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-2xl text-blue-400 border border-red-900">
          Welcome to
          <a href="https://nextjs.org"> Next.js2!!!!!!!</a>
        </h1>
        <h2>Hello World</h2>
        <Link href="/" locale={router.locale === 'en' ? 'tr' : 'en'}>
          <button onClick={() => dispatch({ count: 10, type: ActionType.INCREMENT_COUNTER })} type="button">
            Deneme
          </button>
        </Link>
        <p>
          {state.age}
          <code>pages/index.js</code>
        </p>

        <div>
          <a href="https://nextjs.org/docs">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/master/examples">
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <h3>Deploy &rarr;</h3>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </div>
  );
}
