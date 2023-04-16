import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="absolute bottom-0  inset-x-0 ">
      <div className="flex py-4 items-center gap-16 justify-center flex-row ">
        <Link href="https://www.instagram.com/obsqura.23/">
          <FaInstagram className="w-12 text-white-1000 h-12 p-1" />
        </Link>
        <FaFacebook className="w-12 h-12 text-white-1000 p-1" />
        <FaTwitter className="w-12 h-12 text-white-1000 p-1" />
      </div>
      <h1 className="text-center text-white-1000">Crafted by Team Obscua</h1>
    </div>
  );
};

export default Footer;
