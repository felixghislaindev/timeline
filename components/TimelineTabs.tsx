import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { MdDelete } from "react-icons/md";
import { TimelineTabsProps } from "@/types";

const TimelineTabs: React.FC<TimelineTabsProps> = ({
  points,
  addPoint,
  deletePoint,
  updatePointTitle,
  updatePointDescription,
  updatePointOrder,
}) => {
  const renderTabs = () => {
    return points.map((point) => (
      <TabPanel key={point.id}>
        <label className="block text-gray-500 text-sm font-semibold mb-1">
          Title
        </label>
        <input
          type="text"
          placeholder="Title"
          value={point.title}
          onChange={(e) => updatePointTitle(point.id, e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 text-gray-900"
        />
        <label className="block text-gray-500 text-sm font-semibold mt-2 mb-1">
          Item Position
        </label>
        <select
          value={point.order}
          onChange={(e) =>
            updatePointOrder(point.id, parseInt(e.target.value, 10))
          }
          className="w-full p-2 border border-gray-300 rounded mt-2 focus:outline-none focus:border-indigo-500 text-gray-900"
        >
          {points.map((otherPoint, index) => (
            <option key={otherPoint.id} value={index}>
              {index + 1}
            </option>
          ))}
        </select>
        <label className="block text-gray-500 text-sm font-semibold mt-2 mb-1">
          Description
        </label>
        <textarea
          placeholder="Description"
          value={point.description}
          onChange={(e) => updatePointDescription(point.id, e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-2 h-24 focus:outline-none focus:border-indigo-500 text-gray-900"
        />
      </TabPanel>
    ));
  };
  return (
    <div className="md:ml-8 py-4 px-4 ml-14">
      {/* tabs */}

      <div>
        {points.length === 0 ? (
          <p className="text-lg text-gray-300 font-semibold my-4 ">
            No timeline data available. Create your timeline now!
          </p>
        ) : (
          <div>
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">
              Timeline Configuration
            </h2>

            <Tabs>
              <TabList>
                {points.map((point) => (
                  <Tab key={point.id}>
                    <div className="flex items-center">
                      <span className="text-indigo-600 font-semibold transition duration-200 ">
                        {point.title}
                      </span>
                      <button
                        onClick={() => deletePoint(point.id)}
                        className="text-gray-500 ml-2"
                      >
                        <MdDelete className="transition duration-200 hover:text-red-600" />
                      </button>
                    </div>
                  </Tab>
                ))}
              </TabList>

              {renderTabs()}
            </Tabs>
          </div>
        )}
      </div>

      {/* add */}
      <div className="mt-2 ml-auto">
        <button
          onClick={addPoint}
          className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TimelineTabs;
