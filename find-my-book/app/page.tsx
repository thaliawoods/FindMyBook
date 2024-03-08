import Head from "next/head"

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Head>
          <title>Find My Book</title>
          <meta name="description" content="A simple Book database for user"></meta>
      </Head>

      <main className="container mx auto py-10 px-4 flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8 text-whiyr">Find My Book</h1>
      </main>
    </div>
  );
}