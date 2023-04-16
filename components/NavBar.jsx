import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars, FaHamburger } from "react-icons/fa";

const NavBar = () => {
  const router = useRouter();
  return (
    <div className="flex z-[10] flex-row items-center justify-between">
      <h1 className="text-white-100 text-sm">
        National Techo Cultural Fiesta of ICET
      </h1>
      <FaBars className="text-white-1000 focus: transform rotate-90 z-[2000] block rounded-md md:hidden bg-shark-950 p-1 w-8 h-8" />
      <div className="flex-row gap-4 px-8 rounded-lg hidden md:flex bg-shark-950">
        <Link
          href="/"
          className={
            router.pathname === "/" ? "text-green-400" : " text-white-1000"
          }
        >
          <p className="p-2 text-lg font-semibold  transition-all cursor-pointer duration-100 delay-75 ease-linear hover:text-green-400">
            Home
          </p>
        </Link>
        <Link
          href="/events"
          className={
            router.pathname === "/events?type=event"
              ? "text-blue-ribbon-400"
              : "text-white-1000"
          }
        >
          <p className="p-2 text-lg font-semibold transition-all cursor-pointer duration-100 delay-75 ease-linear hover:text-blue-ribbon-400">
            Events
          </p>
        </Link>
        <Link
          href="/events"
          className={
            router.pathname === "/events?type=workshop"
              ? "text-red-500"
              : "text-white-1000"
          }
        >
          <p className="p-2 text-lg font-semibold transition-all cursor-pointer duration-100 delay-75 ease-linear  hover:text-red-500">
            Workshops
          </p>
        </Link>
        <Link
          href="/events"
          className={
            router.pathname === "/events?type=workshop"
              ? "text-california-500"
              : "text-white-1000"
          }
        >
          <p className="p-2 text-lg font-semibold 0 transition-all cursor-pointer duration-100 delay-75 ease-linear  hover:text-california-500">
            Competitions
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
