import Image from "next/image";
import { Comfortaa, Seymour_One } from "next/font/google";
import Header from "@/app/components/common/Header/Header";

const inter = Seymour_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-seymour",
});

const comfortaa = Comfortaa({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-comfortaa",
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-12 ${comfortaa.variable} font-comfortaa bg-main_bkc`}
    >
      <Header />
      <div className="relative flex flex-row w-full h-inherit lg:max-w-6xl justify-between items-center ">
        <div className="h-full flex flex-col gap-8">
          <div className="flex flex-row items-center">
            <h1
              className={`${inter.variable} text-dark-green text-7xl px-5 py-4`}
            >
              Cats
            </h1>
            <Image
              className="aspect-square h-fit animate-spin-slow"
              src="/flower_main.png"
              alt="Animated orange flower"
              width={80}
              height={80}
            />
          </div>
          <h2
            className={`${inter.variable} text-dark-green text-5xl px-5 py-4 leading-tight`}
          >
            And all you
            <br />
            wanted to know
            <br />
            about them
          </h2>
        </div>
        <Image
          src="/cat_main.png"
          alt="Next.js Logo"
          width={500}
          height={500}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-6xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="rounded-lg border border-transparent px-5 py-4 transition-colors group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block motion-reduce:transform-none transition-transform group-hover:translate-x-1">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="rounded-lg border border-transparent px-5 py-4 transition-colors group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block motion-reduce:transform-none transition-transform group-hover:translate-x-1">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="rounded-lg border border-transparent px-5 py-4 transition-colors group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block motion-reduce:transform-none transition-transform group-hover:translate-x-1">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="rounded-lg border border-transparent px-5 py-4 transition-colors group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block motion-reduce:transform-none transition-transform group-hover:translate-x-1">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            iii{" "}
          </p>
        </a>
      </div>
    </main>
  );
}
