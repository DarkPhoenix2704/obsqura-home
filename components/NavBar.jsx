import { FaBars, FaHamburger } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="flex z-[10] flex-row items-center justify-between">
      <h1 className="text-white-100 text-sm">
        National Techo Cultural Fiesta of ICET
      </h1>
      <FaBars className="text-white-1000 z-[2000] block rounded-md md:hidden bg-shark-950 p-1 w-8 h-8" />
      <div className="flex-row gap-4 px-8 rounded-lg hidden md:flex bg-shark-950">
        <p className="p-2 text-lg font-semibold text-white-1000 transition-all cursor-pointer duration-100 delay-75 ease-linear hover:text-green-400">
          Home
        </p>
        <p className="p-2 text-lg font-semibold text-white-1000 transition-all cursor-pointer duration-100 delay-75 ease-linear hover:text-blue-ribbon-400">
          Events
        </p>
        <p className="p-2 text-lg font-semibold text-white-1000 transition-all cursor-pointer duration-100 delay-75 ease-linear  hover:text-red-500">
          Workshops
        </p>
        <p className="p-2 text-lg font-semibold text-white-1000 transition-all cursor-pointer duration-100 delay-75 ease-linear  hover:text-california-500">
          Competitions
        </p>
      </div>
    </div>
  );
};

export default NavBar;
