import { useRouter } from "next/router";

/* eslint-disable @next/next/no-img-element */
const EventCard = ({ image, name, registration, url }) => {
  const router = useRouter();
  return (
    <div className="bg-gradient-to-b w-[340px] hover:skew-y-0 group ease-linear duration-100 transition-all cursor-pointer rounded-lg from-[#1E1F23] to-[#1E1F23]">
      <img
        src={image}
        alt={name}
        width="w-[340px] h-auto group-hover:scale-105 object-cover rounded-lg"
      />
      <div className="p-2 w-full flex h-auto justify-between flex-col gap-2">
        <div className="flex flex-col items-start justify-between">
          <h1 className="text-xl text-wrap wrap text-white-1000 font-bold">
            {name}
          </h1>
          <h1 className="text-2xl text-white-1000 font-bold">
            ₹{registration}
          </h1>
        </div>
        <div className="flex flex-row items-end justify-between">
          <button
            onClick={() => {
              router.push(url);
            }}
            className="text-center transition-all ease-linear duration-150 text-xl hover:bg-[#484A54] bg-[#36383C] rounded-lg w-full py-3 font-regular text-white-1000"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
