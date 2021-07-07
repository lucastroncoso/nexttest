import Head from 'next/head';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-red-500">test</div>

    </div>
  )
}
