/* eslint-disable @next/next/no-img-element */

import localFont from "next/font/local";
import { useCountdown } from "@app/hooks/useCountdown";

const myFont = localFont({ src: "./clashDisplay.woff2" });

export default function Home() {
  const [days, hours, minutes] = useCountdown("Apr 27, 2023 00:00:00");
  return (
    <div className={myFont.className}>
      <div className="bg-woodsmoke-950 min-h-screen relative">
        <img
          src="bg.svg"
          alt="background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="flex z-[2] flex-col gap-6 items-center justify-center h-screen">
          <img
            src="/obsquralogoconf.png"
            alt="logo"
            className="lg:w-1/2 w-11/12 "
          />
          {/* 
          <h1 className="text-white-1000 font-bold text-3xl text-center">
            APRIL 27, 28, 29
          </h1> */}
          <div className="flex flex-row gap-2 lg:gap-8 my-4">
            <h1 className="text-white-1000  font-bold text-sm text-center lg:text-xl">
              UNLEASHING CREATIVITY
            </h1>
            <h1 className="text-white-1000 font-bold text-sm text-center lg:text-xl">
              EMBRACING DIVERSITY
            </h1>
            <h1 className="text-white-1000 font-bold text-sm text-center lg:text-xl">
              CELEBERATING INNOVATION
            </h1>
          </div>
          <div className="flex flex-row gap-2 text-white-1000 font-bold px-4 py-2 bg-gradient-to-r from-white-600 to rounded-md bg-woodsmoke-950 lg:gap-8">
            {days} Days {hours} Hours {minutes} minutes
          </div>
        </div>
      </div>
    </div>
  );
}
