"use client";
import React, { useEffect, useState } from "react";
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
  const handleUpdatePointTitle = (pointId: string, newTitle: string) => {
    setPoints((prevPoints) =>
      prevPoints.map((point) =>
        point.id === pointId ? { ...point, title: newTitle } : point
      )
    );
  };

  const handleUpdatePointDescription = (
    pointId: string,
    newDescription: string
  ) => {
    setPoints((prevPoints) =>
      prevPoints.map((point) =>
        point.id === pointId ? { ...point, description: newDescription } : point
      )
    );
  };

  const handleDeletePoint = (pointId: string) => {
    setPoints((prevPoints) =>
      prevPoints.filter((point) => point.id !== pointId)
    );
  };
  const handleUpdatePointOrder = (pointId: string, newOrder: number) => {
    const updatedPoints = [...points];
    const pointToReposition = updatedPoints.find(
      (point) => point.id === pointId
    );
    if (pointToReposition) {
      updatedPoints.splice(points.indexOf(pointToReposition), 1);
      updatedPoints.splice(newOrder, 0, pointToReposition);
      updatedPoints.forEach((point, index) => {
        point.order = index;
      });
      setPoints(updatedPoints);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-3 items-center justify-center py-4 px-4 overflow-auto">
      <Timeline points={points} toggleCircleClick={handleToggleCircleClick} />
      <TimelineTabs
        points={points}
        addPoint={handleAddTimelinePoint}
        deletePoint={handleDeletePoint}
        updatePointTitle={handleUpdatePointTitle}
        updatePointDescription={handleUpdatePointDescription}
        updatePointOrder={handleUpdatePointOrder}
      />
    </div>
  );
};

export default TimelineBuilder;
