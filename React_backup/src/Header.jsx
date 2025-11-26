import React from "react";

const Header = () => {
  return (
    <div className=" sticky top-0 ">
      <header className="bg-[#8b4513] h-19 w-full flex justify-between items-center px-8 duration-300 ease-in hover:shadow-xl/30  ">
        <span className="text-2xl text-[#f4e4bc] font-bold duration-300 ease-in hover:scale-110 hover:text-[#d4af37]">
          ☕ Brew & Bean
        </span>
        <div className="flex text-[#f4e4bc] gap-5 ">
          <a className="duration-300 ease-in hover:text-[#d4af37]">Home</a>
          <a className="duration-300 ease-in hover:text-[#d4af37]">Menu</a>
          <a className="duration-300 ease-in hover:text-[#d4af37]">About</a>
          <a className="duration-300 ease-in hover:text-[#d4af37]">Location</a>
        </div>
      </header>
    </div>
  );
};

export default Header;
