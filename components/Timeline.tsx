import { TimelineProps } from "@/types";
import React from "react";

const Timeline: React.FC<TimelineProps> = ({ points, toggleCircleClick }) => {
  const lineStyle = {
    width: `${points.length * 400}px`,
  };
  return (
    <div className="mx-auto overflow-x-auto mr-12 ml-12 py-10 px-10 mt-12">
      <ol
        className="border-l border-neutral-300 dark:border-indigo-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t mt-8"
        style={lineStyle}
      >
        {points.map((point, index) => (
          <li key={point.id}>
            <div className="flex-start flex items-center pt-2 md:block md:pt-0 ">
              <div
                className={`-ml-1 mr-3 h-6 w-6 rounded-full border ${
                  point.isCircleClicked
                    ? "bg-green-500"
                    : "border-indigo-300 dark:border-indigo-500"
                } md:-mt-[12px] sm:mr-[5px] sm:-ml-3 md:ml-0 md:mr-0`}
                onClick={() => toggleCircleClick(point.id)}
              ></div>

              <p className="mt-2 text-sm text-indigo-500 font-bold">
                {point.date}
              </p>
            </div>
            <div className="ml-4 mt-2 pb-5 md:ml-0">
              <h4 className="mb-1.5 text-xl font-semibold">{point.title}</h4>
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                {point.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
