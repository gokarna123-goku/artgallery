import React from "react";
import RootLayout from "../../../layout/RootLayout";

import BgImg from "../../../assets/wave.png";

const Counter = () => {
  return (
    <div className="w-full">
      <RootLayout className={""}>
        <div className="w-full bg-neutral-900/20 border border-neutral-900/70 rounded-lg px-6 py-12 relative">
          {/*overlay background image  */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-10 opacity-20"
            style={{ backgroundImage: `url(${BgImg})` }}
          />

          {/* content */}
          <div className="w-full grid grid-cols-3 gap-10 divide-x divide-neutral-800/60 relative z-20">
            <div className="w-full p-6 space-y-3 flex items-center justify-center flex-col text-center">
              <div className="space-y-1">
                <h1 className="text-6xl text-neutral-50 font-black leading-[1.1]">
                  10k+
                </h1>
                <p className="text-lg text-neutral-400 font-medium">Artworks</p>
              </div>
              <p className="text-sm text-neutral-400 font-medium">
                Unique and captivating artworks from around the world.
              </p>
            </div>

            <div className="w-full p-6 space-y-3 flex items-center justify-center flex-col text-center">
              <div className="space-y-1">
                <h1 className="text-6xl text-neutral-50 font-black leading-[1.1]">
                  500+
                </h1>
                <p className="text-lg text-neutral-400 font-medium">Artists</p>
              </div>
              <p className="text-sm text-neutral-400 font-medium">
                Talented artists from around the world.
              </p>
            </div>

            <div className="w-full p-6 space-y-3 flex items-center justify-center flex-col text-center">
              <div className="space-y-1">
                <h1 className="text-6xl text-neutral-50 font-black leading-[1.1]">
                  12
                </h1>
                <p className="text-lg text-neutral-400 font-medium">
                  Exhibitions
                </p>
              </div>
              <p className="text-sm text-neutral-400 font-medium">
                Annual curated shows featuring diverse artworks styles.
              </p>
            </div>
          </div>
        </div>
      </RootLayout>
    </div>
  );
};

export default Counter;
