import Image from "next/image";
import Header from "@/app/components/common/Header/Header";
import NavBlock from "@/app/components/navigation/NavBlock/NavBlock";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-12 font-comfortaa bg-main_bkc`}
    >
      <Header />
      <div className="relative flex flex-row w-full h-inherit lg:max-w-6xl justify-between items-center ">
        <div className="h-full flex flex-col gap-8">
          <div className="flex flex-row items-center">
            <h1 className={`font-seymour text-dark-green text-7xl px-5 py-4`}>
              Cats
            </h1>
            <Image
              className="aspect-square h-fit animate-spin-slow"
              src="/flower_main.avif"
              alt="Animated painted orange flower that rotates"
              width={80}
              height={80}
            />
          </div>
          <h2
            className={`font-seymour text-dark-green text-5xl px-5 py-4 leading-tight`}
          >
            And all you
            <br />
            wanted to know
            <br />
            about them
          </h2>
        </div>
        <Image
          src="/cat_main.avif"
          alt="Gray kitten image with open mouth"
          width={500}
          height={500}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-6xl lg:grid-cols-4 lg:text-left">
        <NavBlock
          heading="About us"
          description="Find out more about this projects and why we cool!"
          href="/about-this-project"
        />
        <NavBlock
          heading="Species"
          description="Investigate unique cats species and its pecularities"
          href="/species"
        />
        <NavBlock
          heading="Species"
          description="Investigate unique cats species and its pecularities"
          href="/species"
        />
      </div>
    </main>
  );
}
