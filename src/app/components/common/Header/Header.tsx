import { headerItems } from "@/app/components/common/Header/headerConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Header() {
  return (
    <header className="w-full z-10 max-w-6xl flex gap-10 pl-6">
      <div className="lg:flex justify-between text-lg relative gap-6 max-w-fit items-center">
        {headerItems.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className="nav-link flex flex-col h-[48px] overflow-y-hidden relative"
          >
            <p className="hover:text-amber-500 transition-all duration-300">
              {item.name}
            </p>
            <svg
              className="link-svg"
              viewBox="0 0 781.4 40.9"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeMiterlimit={10}
                strokeWidth={5}
                pathLength="1"
                d="M.7 1.4l37.2 38L75 1.4l37.1 38 37.2-38 37.1 38 37.2-38 37.1 38 37.1-38 37.2 38 37.1-38 37.2 38 37.1-38 37.1 38 37.2-38 37.1 38 37.2-38 37.1 38 37.2-38 37.1 38 37.2-38 37.1 38"
              />
            </svg>
          </Link>
        ))}
      </div>
      <form className="relative right-0 transition-all duration-1000 w-[44px] h-[44px] bg-white box-border rounded-md border-4 border-white p-1 hover:w-52 hover:cursor-pointer valid:w-52 valid:cursor-pointer group">
        <input
          type="search"
          required
          className="absolute hidden top-0 left-0 w-full h-full outline-0 border-0  text-lg rounded-3xl py-0 px-5 group-hover:block group-valid:block"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="box-border p-2 w-[20px] h-[20px] absolute top-0 right-0 rounded-md text-[#07051a] text-center text-[1.2em] transition-all duration-1000 group-hover:bg-dark-green group-hover:text-white group-valid:bg-dark-green group-valid:text-white"
        />
      </form>
    </header>
  );
}

export default Header;
