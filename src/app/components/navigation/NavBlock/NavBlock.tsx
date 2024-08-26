import { NevBlockPropTypes } from "@/app/components/navigation/NavBlock/types";
import Link from "next/link";

const NavBlock = ({ heading, description, href }: NevBlockPropTypes) => {
  return (
    <Link
      href={href}
      className="rounded-lg border border-transparent px-5 py-4 transition-colors group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {`${heading} `}
        <span className="inline-block motion-reduce:transform-none transition-transform group-hover:translate-x-1">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{description}</p>
    </Link>
  );
};

export default NavBlock;
