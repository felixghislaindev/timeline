export interface TimelinePoint {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  isCircleClicked: boolean;
  order: number;
}
export interface TimelineProps {
  points: TimelinePoint[];
  toggleCircleClick: (pointId: string) => void;
}

export interface TimelineTabsProps {
  points: TimelinePoint[];
  addPoint: () => void;
  deletePoint: (pointId: string) => void;
  updatePointTitle: (pointId: string, newTitle: string) => void;
  updatePointDescription: (pointId: string, newDescription: string) => void;
  updatePointOrder: (pointId: string, newOrder: number) => void;
}
