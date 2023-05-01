/* eslint-disable @next/next/no-img-element */
/*  @next/next/no-img-element */

import { useCountdown } from "@app/hooks/useCountdown";
import NavBar from "@app/components/NavBar";
import SponsorsBlack from "@app/components/SponsorsBlock";
import BaseLayout from "@app/layout/BaseLayout";
import Footer from "@app/components/Footer";
import EventCard from "@app/components/EventCard";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import events from "@app/data/events";
import faqs from "@app/data/faq";

export default function Home() {
  const [days, hours, minutes] = useCountdown("May 04, 2023 00:00:00");
  const tags = [
    "ALL",
    "COMMON",
    "CULTURAL",
    "COMPETITION",
    "WORKSHOP",
    "AD & CC",
    "CSE",
    "CIVIL",
    "ECE",
    "MCA",
    "MBA",
    "MECH",
  ];

  const [activeTag, setActiveTag] = useState("ALL");

  const router = useRouter();
  const handleMouseMove = (e) => {
    const { currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    currentTarget.style.setProperty("--mouse-x", `${x}px`);
    currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  const eventsByTag = useMemo(() => {
    return events.filter((event) => event.tags.includes(activeTag));
  }, [activeTag]);

  useEffect(() => {
    for (const card of document.querySelectorAll(".home")) {
      const cardBody = card;
      cardBody.addEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <BaseLayout>
      <div
        className={`home bg-woodsmoke-950 scroll-smooth before:pointer-events-none min-h-screen relative before:absolute before:top-0 before:left-0 before:transition-opacity before:duration-500 before:w-full before:h-full before:bg-nicebg hover:before:opacity-20 before:z-10 before:contents-[''] `}
      >
        <div className="absolute top-5 w-full px-5">
          <NavBar />
        </div>

        <div className="flex z-[10] flex-col gap-6 items-center relative justify-center h-screen">
          <img
            src="/obsquralogoconf.png"
            alt="logo"
            className="lg:w-1/2 absolute top-[20%] w-11/12 "
          />
          <img
            src="/gopi.png"
            alt="logo"
            className="absolute left-0 bottom-0 w-2/3 lg:w-1/3"
          />
          <img
            src="/teri miko.png"
            alt="logo"
            className="absolute w-256 -right-0 bottom-0 w-2/3 lg:w-1/3"
          />

          <div className="flex flex-row gap-2 absolute top-[40%] md:top-[65%]  z-[15] lg:gap-8 my-4">
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
          <div className="flex absolute top-[80%] z-[256] flex-row gap-2 text-white-1000 font-bold px-4 py-2 bg-gradient-to-r from-white-600 to rounded-md bg-woodsmoke-950 lg:gap-8">
            {days} Days {hours} Hours {minutes} minutes
          </div>
          <button
            onClick={() => {
              router.push("https://forms.gle/VeLiFNinysT8qbB56");
            }}
            className="text-white-1000  absolute top-[90%] z-[256] rounded-md px-4 py-2 bg-gradient-to-b from-white-600 bg-woodsmoke-950 hover:scale-95 transition-all ease"
          >
            Register Now
          </button>
        </div>
        <div className="w-full min-h-screen" id="events">
          <h1 className="text-7xl px-8 items-center tracking-wider text-center font-semibold text-white-1000">
            EVENTS
          </h1>
          <div className="flex my-4 px-4 scrollbar-hide flex-wrap flex-row items-center justify-center gap-4">
            {tags.map((tag) => (
              <p
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 h-8 py-2 w-18 text-white-1000 rounded-md px-4 bg-gradient-to-b from-white-600 bg-woodsmoke-950 hover:scale-95 transition-all ease ${
                  activeTag === tag
                    ? "bg-gradient-to-b scale-95 from-white-600"
                    : ""
                }`}
              >
                {tag}
              </p>
            ))}
          </div>
          <div className=" flex flex-row mx-8 justify-center flex-wrap py-8 gap-8">
            {eventsByTag.map((event) => {
              return (
                <EventCard
                  registration={event.fee}
                  key={event.name}
                  url={event.link}
                  image={event.image}
                  name={event.name}
                />
              );
            })}
          </div>
        </div>
        <SponsorsBlack />
        <div
          id="faqs"
          className="bg-gradient-to-b mx-4 rounded-lg from-[#1E1F23] to-[#1E1F23]"
        >
          <div className="flex flex-col lg:flex-row items-center md:py-8 py-4">
            <h1 className="md:text-7xl text-3xl px-8 items-center tracking-wider text-left font-semibold text-white-1000">
              FAQ
            </h1>
            <div className="flex flex-col w-full px-8">
              {faqs.map((faq) => (
                <div key={faq.question} className="py-2">
                  <details className="group text-white-1000">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="text-xl w-full"> {faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-white-1000 mt-1 group-open:animate-fadeIn">
                      {faq.answer}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          id="contact"
          className="bg-gradient-to-b m-4 rounded-lg from-[#1E1F23] to-[#1E1F23]"
        >
          <div className="flex flex-col items-center md:py-8 py-4">
            <h1 className="md:text-7xl text-2xl px-8 items-center tracking-wider text-left font-semibold text-white-1000">
              Contact
            </h1>
            <p className="text-white-1000">For Any Queries</p>
            <p className="text-white-1000">Manaf AV - +91 81118 60806</p>
            <p className="text-white-1000">Muhammed Ashly - +91 80863 48962</p>
          </div>
        </div>

        <Footer />
      </div>
      {/* <img
        src="bg.svg"
        alt="background"
        className="absolute inset-0 z-0 pointer-events-none object-cover w-full h-full"
      /> */}
    </BaseLayout>
  );
}
