import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJs, Tailwind, DaisyUI starter</title>
      </Head>

      <main>
        <div className="hero min-h-[400px] bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                This starter pack is bootstrapped with NextJS, TailwindCSS, and
                DaisyUI
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center py-8 bg-base-100">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cool Footer Bro{' '}
        </a>
      </footer>
    </div>
  );
}
