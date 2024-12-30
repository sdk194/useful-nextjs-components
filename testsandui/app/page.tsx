import Link from "next/link";

export default async function Home() {
  return (
      <main>
        <p>This is the homepage of a series of tests and example ui:</p>
          <Link href="/modalExample"><p className="text-blue-700 underline">Example of a modal component</p></Link>
      </main>
  );
}
