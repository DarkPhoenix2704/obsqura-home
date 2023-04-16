import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <div className="flex py-4 bg-transparent items-center gap-16 justify-center flex-row ">
        <Link href="https://www.instagram.com/obsqura.23/">
          <FaInstagram className="w-12 text-white-1000 h-12 p-1" />
        </Link>
        <FaFacebook className="w-12 h-12 text-white-1000 p-1" />
        <FaTwitter className="w-12 h-12 text-white-1000 p-1" />
      </div>
      <Link href="https://icet.ac.in">
        <h1 className="text-center font-semibold text-white-1000">
          Ilahia College of Engineering and Technology
        </h1>
      </Link>
      <h1 className="text-center text-white-1000">Crafted by Team OBSQURA</h1>
    </div>
  );
};

export default Footer;
