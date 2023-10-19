"use client";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import Timeline from "./Timeline";
import TimelineTabs from "./TimelineTabs";
import { TimelinePoint } from "@/types";

const TimelineBuilder = () => {
  const [points, setPoints] = useState<TimelinePoint[]>([]);
  const handleAddTimelinePoint = () => {
    const newPoint: TimelinePoint = {
      id: Date.now().toString(),
      title: "New Timeline Point",
      description: "Description of the new Timeline Point",
      completed: false,
      isCircleClicked: false,
      order: points.length,
    };
    setPoints((prevPoints) => [...prevPoints, newPoint]);
  };
  const handleToggleCircleClick = (pointId: string) => {
    setPoints((prevPoints) =>
      prevPoints.map((point) =>
        point.id === pointId
          ? {
              ...point,
              isCircleClicked: !point.isCircleClicked,
            }
          : point
      )
    );
  };

  return (
    <div>
      <Timeline points={points} toggleCircleClick={handleToggleCircleClick} />
      <TimelineTabs />
    </div>
  );
};

export default TimelineBuilder;
