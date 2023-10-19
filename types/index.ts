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
