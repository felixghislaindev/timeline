import { TimelineProps } from "@/types";
import React from "react";

const Timeline: React.FC<TimelineProps> = ({ points, toggleCircleClick }) => {
  return (
    <div
      className={`space-y-8 relative before:absolute before:inset-0 before:ml-6 sm:before:ml-9 before:-translate-x-1/2 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-indigo-500 md:w-3/4 py-4 px-4`}
    >
      {points.map((point, index) => (
        <div
          key={point.id}
          className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group `}
        >
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full text-purple-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 border ${
              point.isCircleClicked ? "bg-green-500" : "border-indigo-500"
            }`}
            onClick={() => toggleCircleClick(point.id)}
          >
            {point.isCircleClicked ? (
              <svg
                className="fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fillRule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.a.916.a.916.916.a.916.916 0 0 0 1.296 0l6.415-6.416a.916.a.916.a.916.a.916.a.916.916.916.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            ) : null}
          </div>

          <div
            className={`w-full md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border-slate-200 shadow`}
          >
            <div className="flex flex-col space-y-2">
              <div>
                <div className={`font-bold text-slate-900`}>{point.title}</div>
              </div>
              <time className="font-caveat font-medium text-indigo-500">
                08/06/2023
              </time>
              <div className="text-slate-500">{point.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
