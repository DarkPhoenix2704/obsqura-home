import Link from "next/link";
import { useEffect } from "react";

const Feedack = () => {
  const handleMouseMove = (e) => {
    const { currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    currentTarget.style.setProperty("--mouse-x", `${x}px`);
    currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  useEffect(() => {
    for (const card of document.querySelectorAll(".home")) {
      const cardBody = card;
      cardBody.addEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div className="home flex flex-col gap-8 items-center justify-center bg-woodsmoke-950 scroll-smooth before:pointer-events-none min-h-screen relative before:absolute before:top-0 before:left-0 before:transition-opacity before:duration-500 before:w-full before:h-full before:bg-nicebg hover:before:opacity-20 before:z-10 before:contents-[''">
      <h1 className="md:text-7xl text-3xl px-8 items-center tracking-wider text-left font-semibold text-white-1000">
        FEEDBACK
      </h1>
      <p className="text-white-1000">
        Please record your feedback here. We would love to hear
      </p>

      <Link href="https://forms.gle/9xLmzZm5gY3EcFE3A">
        <button className="text-white-1000  z-[256] rounded-md px-4 py-2 bg-gradient-to-b from-white-600 bg-woodsmoke-950 hover:scale-95 transition-all ease">
          Feedback Form
        </button>
      </Link>
    </div>
  );
};

export default Feedack;
