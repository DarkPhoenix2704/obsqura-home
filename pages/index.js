/* eslint-disable @next/next/no-img-element */

import { useCountdown } from "@app/hooks/useCountdown";
import NavBar from "@app/components/NavBar";
import SponsorsBlack from "@app/components/SponsorsBlock";
import BaseLayout from "@app/layout/BaseLayout";
import Footer from "@app/components/Footer";
import EventCard from "@app/components/EventCard";
import { useRouter } from "next/router";
import { useEffect } from "react";
import events from "@app/data/events";
import faqs from "@app/data/faq";

export default function Home() {
  const [days, hours, minutes] = useCountdown("May 04, 2023 00:00:00");
  const router = useRouter();
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
      cardBody.onmousemove = (e) => handleMouseMove(e);
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

        <div className="flex z-[10] flex-col gap-6 items-center justify-center h-screen">
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
          <button
            onClick={() => {
              router.push("https://www.yepdesk.com/profile/obsquraicet");
            }}
            className="text-white-1000 rounded-md px-4 py-2 bg-gradient-to-b from-white-600 bg-woodsmoke-950 hover:scale-95 transition-all ease"
          >
            Register Now
          </button>
        </div>
        <div className="w-full min-h-screen" id="events">
          <h1 className="text-7xl px-8 items-center tracking-wider text-center font-semibold text-white-1000">
            EVENTS
          </h1>
          <div className=" flex flex-row mx-8 justify-center flex-wrap py-8 gap-8">
            {events.map((event) => {
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
          <div className="flex flex-col lg:flex-row items-center py-8">
            <h1 className="text-7xl px-8 items-center tracking-wider text-left font-semibold text-white-1000">
              FAQ
            </h1>
            <div className="flex flex-col w-full px-8">
              {faqs.map((faq) => (
                <div key={faq.question} class="py-2">
                  <details class="group text-white-1000">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span className="text-2xl w-full"> {faq.question}</span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p class="text-white-1000 mt-1 group-open:animate-fadeIn">
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
          <div className="flex flex-col items-center py-8">
            <h1 className="text-7xl px-8 items-center tracking-wider text-left font-semibold text-white-1000">
              Contact
            </h1>
            <p className="text-white-1000">For Any Queries</p>
            <p className="text-white-1000">Manaf S - +91 81118 60806</p>
            <p className="text-white-1000">Muhammed Ashley - +91 80863 48962</p>
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
