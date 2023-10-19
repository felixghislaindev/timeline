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

  return (
    <div>
      <Timeline />
      <TimelineTabs />
    </div>
  );
};

export default TimelineBuilder;
