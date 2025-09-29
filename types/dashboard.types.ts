export interface CollaboratorTask {
  name: string;
  date: string;
  time: string;
  done: boolean;
}

// Interface for the nested details object
interface CollaboratorDetails {
  location: string;
  contractor: string;
}

export interface CollaboratorIndicators {
  name: string;
  tooltip: string;
  percentage: number;
  value: string;
  trend: string; // or just string if values vary
  description: string;
}

export interface PendingTasks {
  name: string;
  date: string;
}

// Main interface for each data entry
export interface CollaboratorData {
  name: string;
  position: string;
  risk: string;
  riskPercent: string;
  date: string;
  details: CollaboratorDetails;
  collaboratorIndicator: CollaboratorIndicators[];
  collaboratorTask: CollaboratorTask[];
  pendingTask: PendingTasks[];
}

// Props for the main component
export interface MemberDetailsModalProps {
  member: CollaboratorData;
  index: number;
  toggleRowExpansion: (index: number) => void;
}

export interface CardData {
  name: string;
  tooltip: string;
  percentage: number;
  value: string;
  trend: "up" | "down";
  description: string;
  disable?: boolean;
  id?: number;
}

// INDIVIDUAL PENDING TASK DETAILS
export interface IndividualCardData {
  name: string;
  id: number;
  details: {
    propertyName: string;
    percentage: number;
    isGood?: boolean;
  }[];
  riskControls?: {
    risk: string;
    percentage: number;
    description: string;
  }[];
  riskHours?: {
    chartData: { x: number; y: number; xLabel: string }[];
    propertyName: string;
    description: string;
    percentage: number;
    subtitle: string;
  };
}
