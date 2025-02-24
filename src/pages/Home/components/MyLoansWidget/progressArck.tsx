import React from 'react';

interface HalfCircleProgressProps {
  progress?: number;
}

const HalfCircleProgress = ({ progress = 0 }: HalfCircleProgressProps) => {
  const radius = 70; // Radius of the half-circle
  const strokeWidth = 14;
  const gapSize = 15; // Space between arcs
  const circumference = Math.PI * radius; // Half-circle circumference

  // Adjusted arc lengths to create space
  const totalArcLength = circumference - gapSize;
  const progressArc = (progress / 100) * totalArcLength;
  const remainingArc = totalArcLength - progressArc;

  return (
    <svg width="276" height="130" viewBox="-20 -10 200 80">
      {progress !== 0 && (
        <path
          d="M10,70 A70,70 0 0,1 150,70"
          fill="none"
          stroke="#392362"
          strokeWidth={strokeWidth}
          strokeDasharray={`${progressArc}, ${circumference}`}
          strokeDashoffset={0}
          strokeLinecap="round"
          style={{transition: "stroke-dasharray 0.5s ease-in-out"}}
        />
      )}
      {progress !== 100 && (
        <path
          d="M10,70 A70,70 0 0,1 150,70"
          fill="none"
          stroke="#F2EEF8"
          strokeWidth={strokeWidth}
          strokeDasharray={`${remainingArc}, ${circumference}`}
          strokeDashoffset={-progressArc - gapSize}
          strokeLinecap="round"
          style={{transition: "stroke-dasharray 0.5s ease-in-out"}}
        />
      )}
    </svg>
  );
};

export default HalfCircleProgress;
