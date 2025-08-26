import React from "react";

interface PathConnectorProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
  color?: string;
  delay?: number;
}

const PathConnector: React.FC<PathConnectorProps> = ({
  from,
  to,
  color = "#39ff14",
  delay = 0,
}) => {
  // Calculate control points for a smooth curved path
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const curvature = 0.4; // adjust for more/less bend
  const curvatureY = 0.7; // adjust for more/less bend

  const controlX1 = from.x + dx * curvature;
  const controlY1 = from.y + dy * curvatureY;
  const controlX2 = to.x - dx * curvature;
  const controlY2 = to.y - dy * curvatureY;

  const pathD = `M ${from.x} ${from.y} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${to.x} ${to.y}`;
  const pathId = `path-${from.x}-${from.y}-${to.x}-${to.y}-${Math.random()}`;

  return (
    <>
      <path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth={3.5}
        filter="url(#glow)"
        className="animated-path"
        style={{ animationDelay: `${delay}s` }}
        id={pathId}
      />

      {/* Glowing Pulse Traveling Along Path */}
      <circle r="4" fill={color} filter="url(#glow)">
        <animateMotion
          dur="1.5s"
          repeatCount="indefinite"
          begin={`${delay}s`}
          rotate="auto"
        >
          <mpath href={`#${pathId}`} />
        </animateMotion>
      </circle>
    </>
  );
};

export default PathConnector;
