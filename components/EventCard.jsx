/* eslint-disable @next/next/no-img-element */
const EventCard = () => {
  return (
    <div className="bg-gradient-to-b skew-y-2 hover:skew-y-0 group ease-linear duration-100 transition-all cursor-pointer rounded-lg from-[#1E1F23] to-[#1E1F23]">
      <img
        src="/harley.png"
        alt="harley "
        width="w-[300] h-auto group-hover:scale-105 object-cover rounded-lg"
      />
      <div className="p-2 flex flex-col gap-2">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-2xl text-white-1000 font-bold">
            HARLEY DAVIDSON WORKSHOP
          </h1>
          <h1 className="text-2xl text-white-1000 font-bold">₹809</h1>
        </div>
        <div className="flex flex-row items-center justify-between">
          <button className="text-center transition-all ease-linear duration-150 text-xl hover:bg-[#484A54] bg-[#36383C] rounded-lg w-full py-3 font-regular text-white-1000">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
