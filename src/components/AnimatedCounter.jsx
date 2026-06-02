import React from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";

function AnimatedCounter() {
  return (
    <div id="counter" className="paddin-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((Item) => (
          <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
            <div
              key={counterItems.label}
              className="counter-number text-white text-5xl font-bold mb-2"
            >
              <CountUp suffix={item.suffix} end={Item.value} />
            </div>
            l<div className="text-white-50 text-lg">{Item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimatedCounter;
