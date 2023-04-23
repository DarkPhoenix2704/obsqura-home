import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

const MobileNav = ({ setInvisible }) => {
  const router = useRouter();
  return (
    <div className="z-[9999] translate-x-32 fixed h-screen w-screen inset-0 bg-[#1e1f23]">
      <AiOutlineClose
        onClick={() => {
          setInvisible(false);
        }}
        className="text-white-1000 absolute focus:transform right-36 top-6 focus:rotate-90 z-[2000] block rounded-md md:hidden bg-shark-950 p-1 w-8 h-8"
      />
      <div className="flex mt-16 ml-4 flex-col text-white-1000">
        <div className="flex-col gap-4 px-8 rounded-lg flex">
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
            href="#events"
            className={
              router.pathname === "/#events"
                ? "text-blue-ribbon-400"
                : "text-white-1000"
            }
          >
            <p className="p-2 text-lg font-semibold transition-all cursor-pointer duration-100 delay-75 ease-linear hover:text-blue-ribbon-400">
              Events
            </p>
          </Link>
          <Link
            href="#faqs"
            className={
              router.pathname === "/#faqs" ? "text-red-500" : "text-white-1000"
            }
          >
            <p className="p-2 text-lg font-semibold transition-all cursor-pointer duration-100 delay-75 ease-linear  hover:text-red-500">
              FAQS
            </p>
          </Link>
          <Link
            href="#contact"
            className={
              router.pathname === "/#contact"
                ? "text-yellow-500"
                : "text-white-1000"
            }
          >
            <p className="p-2 text-lg font-semibold 0 transition-all cursor-pointer duration-100 delay-75 ease-linear  hover:text-yellow-500">
              Contact
            </p>
          </Link>
        </div>
        <div className="absolute text-white-1000 bottom-2">Obsqura 23</div>
      </div>
    </div>
  );
};
export default MobileNav;
