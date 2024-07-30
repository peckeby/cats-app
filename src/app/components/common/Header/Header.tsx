import { headerItems } from "@/app/components/common/Header/headerConfig";

function Header() {
  return (
    <header className="w-full z-10 max-w-6xl">
      <div className="lg:flex justify-between text-sm relative">
        {headerItems.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
      <form className="relative right-0 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 w-[50px] h-[50px] bg-white box-border rounded-md border-4 border-white p-1 hover:w-52 hover:cursor-pointer valid:w-52 valid:cursor-pointer group">
        <input
          type="search"
          required
          className="absolute hidden top-0 left-0 w-full h-[42.5px] outline-0 border-0  text-2xl rounded-3xl py-0 px-5 group-hover:block group-valid:block"
        />
        <i className="fa-search box-border p-2 w-[42.5px] h-[42.5px] absolute top-0 right-0 rounded-md text-[#07051a] text-center text-[1.2em] transition-all duration-1000 group-hover:bg-[#07051a] group-hover:text-white group-valid:bg-[#07051a] group-valid:text-white" />
      </form>
    </header>
  );
}

export default Header;
