import { Navbar } from "./_components";

export default function Marketing() {
  return (
    <main className="flex flex-col container mt-16">
      <h1 className="mb-6 text-3xl font-bold leading-snug  sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
        We&apos;re here to increase your Productivity
      </h1>
      <p>
        Let&apos;s make you work more organize and easily using the ravenbugpro
        dashboard with many of the latest feature in managing work every day.
      </p>
      <div>
        <h2 className="font-bold">More than 25,000 teams use ravenBugPro</h2>
        <ul>
          <li>Unsplash</li>
          <li>Notion</li>
          <li>Jumia</li>
        </ul>
      </div>
    </main>
  );
}
