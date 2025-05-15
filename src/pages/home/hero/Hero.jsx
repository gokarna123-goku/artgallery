import React from "react";
import { FaAnglesRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="w-full h-[calc(100dvh-8ch)] mt-[7ch] flex items-center justify-center">
      <div className="w-full flex-1 h-full flex items-center justify-center lg:px-20 md:px-14 sm:px-10 px-4 flex-col space-y-10 bg-[url('https://cdn.pixabay.com/photo/2015/11/24/10/54/space-1059761_1280.jpg')] bg-cover bg-bottom bg-no-repeat relative">
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-neutral-950 via-neutral-950 to-neutral-950/95 backdrop-blur-sm" />

        {/* content */}
        <div className="w-full z-30 space-y-10 relative text-center flex items-center justify-center flex-col">
          <div className="space-y-4">
            <div className="space-y-1 w-full text-center flex items-center justify-center flex-col">
              <p className="w-fit text-sm text-neutral-300 font-semibold border border-neutral-700 rounded-full px-3 py-1">
                Welcome to Artistry Gallery
              </p>
              <h1 className="text-8xl text-neutral-50 font-black leading-[1.1] text-center">
                Where Art Meets
                <br />
                <span className="text-[6.5rem] bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
                  {/* Inspiration */}
                  Innovation
                </span>
              </h1>
            </div>

            <div className="w-full flex items-center justify-center">
              <p className="text-lg text-neutral-400 font-medium max-w-lg flex items-center justify-center text-center">
                Discover a curated collection of contemporary masterpieces from
                emerging and established artists around the globe.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="w-full flex items-center justify-center gap-x-6">
            <button className="w-fit px-6 py-3 rounded-lg bg-neutral-800 hover:bg-neutral-800/80 text-neutral-50 flex items-center gap-x-2 cursor-pointer ease-in-out duration-300">
              Explore Gallery <FaAnglesRight size={15} className="pt-0.5" />
            </button>
            <button className="w-fit px-6 py-3 rounded-lg border border-neutral-800 hover:border-neutral-800/80 hover:bg-neutral-800/20 text-neutral-50 flex items-center gap-x-2 cursor-pointer ease-in-out duration-300">
              Current Exhibitions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
