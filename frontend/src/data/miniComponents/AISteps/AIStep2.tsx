// src/components/CyberpunkUI.tsx
import React, { useRef, useState, useEffect } from "react";
import PathConnector from "../PathConnector";
import "./AISteps.css"; // Add your animation styles here

const CyberpunkUI: React.FC = () => {
  const aiRef = useRef<HTMLDivElement | null>(null);
  const redRef = useRef<HTMLDivElement | null>(null);
  const blueRef = useRef<HTMLDivElement | null>(null);
  const optionRefs = useRef<Array<HTMLDivElement | null>>([]);

  const [lines, setLines] = useState<JSX.Element[]>([]);
  const [showTeams, setShowTeams] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<"" | "red" | "blue">("");

  const redOptions = ["Option A", "Option B", "Option C", "Option D"];
  const blueOptions = ["Choice 1", "Choice 2", "Choice 3", "Choice 4"];

  const svgRef = useRef<SVGSVGElement | null>(null);

  const getCenter = (el: HTMLElement | null): { x: number; y: number } => {
    if (!el || !svgRef.current) return { x: 0, y: 0 };
    const elRect = el.getBoundingClientRect();
    const svgRect = svgRef.current.getBoundingClientRect();

    return {
      x: elRect.left - svgRect.left + elRect.width / 2,
      y: elRect.top - svgRect.top + elRect.height / 2,
    };
  };

  const drawLines = React.useCallback(() => {
    const newLines: JSX.Element[] = [];
    const ai = getCenter(aiRef.current);
    const red = getCenter(redRef.current);
    const blue = getCenter(blueRef.current);

    if (showTeams) {
      if (red.x && red.y)
        newLines.push(
          <PathConnector from={ai} to={red} key="ai-red" color="#ff4d4d" />
        );
      if (blue.x && blue.y)
        newLines.push(
          <PathConnector from={ai} to={blue} key="ai-blue" color="#4d94ff" />
        );
    }

    const activeRef = selectedTeam === "red" ? redRef : blueRef;
    const color = selectedTeam === "red" ? "#ff4d4d" : "#4d94ff";

    if (selectedTeam) {
      optionRefs.current.forEach((ref, i) => {
        const from = getCenter(activeRef.current);
        const to = getCenter(ref);
        newLines.push(
          <PathConnector
            key={`line-${selectedTeam}-${i}`}
            from={from}
            to={to}
            color={color}
            delay={i * 0.2}
          />
        );
      });
    }

    setLines(newLines);
  }, [showTeams, selectedTeam]);

  useEffect(() => {
    drawLines();
    window.addEventListener("resize", drawLines);
    return () => window.removeEventListener("resize", drawLines);
  }, [drawLines]);

  const toggleAI = () => {
    if (showTeams) {
      setSelectedTeam("");
      setShowTeams(false);
    } else {
      setShowTeams(true);
    }
  };

  const toggleTeam = (team: "red" | "blue") => {
    setSelectedTeam((prev) => (prev === team ? "" : team));
  };

  return (
    <div className="relative min-h-screen bg-black text-white font-mono p-10 overflow-hidden">
      {/* SVG Background */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {lines}
      </svg>

      {/* AI */}
      <div className="flex justify-center z-10 relative mb-24">
        <div ref={aiRef}>
          <button
            onClick={toggleAI}
            className="relative bg-gray-800 border-2 border-neon-cyan text-[#00ffff] px-8 py-3 rounded-md shadow-lg text-2xl font-bold z-20 hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-opacity-75
             hover:shadow-glow-cyan"
            //className="bg-black px-6 py-3 rounded-lg text-lg border-2 neon-glow text-[#00ffff] hover:scale-105 transition shadow-md"
          >
            AI Roadmap // {showTeams ? "activated" : "standby"}
          </button>
        </div>
      </div>

      {/* Teams */}
      {showTeams && (
        <div className="flex justify-around mx-40 mb-16 relative z-10">
          <div ref={redRef}>
            <button
              onClick={() => toggleTeam("red")}
              className="relative bg-gradient-to-br from-red-800 to-red-900 border-2 border-neon-red text-white px-6 py-2 rounded-md shadow-lg text-xl font-semibold z-20 group-hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-neon-red focus:ring-opacity-75
             hover:shadow-glow-red"
              // className="bg-red-700 border border-red-400 px-6 py-2 rounded hover:scale-105 transition"
            >
              Red Team
            </button>
          </div>
          <div ref={blueRef}>
            <button
              onClick={() => toggleTeam("blue")}
              className="relative bg-gradient-to-br from-blue-800 to-blue-900 border-2 border-neon-blue text-white px-6 py-2 rounded-md shadow-lg text-xl font-semibold z-20 group-hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-neon-blue focus:ring-opacity-75
             hover:shadow-glow-blue"
            >
              Blue Team
            </button>
          </div>
        </div>
      )}

      {/* Options */}
      {selectedTeam && (
        <div
          className={`absolute top-[50%] transition-opacity duration-500 ease-in-out ${
            selectedTeam === "red" ? "left-[5%]" : "right-[10%]"
          } opacity-100 z-10`}
        >
          <div className="flex flex-wrap gap-6">
            {(selectedTeam === "red" ? redOptions : blueOptions).map(
              (opt, i) => (
                <div
                  key={opt}
                  ref={(el) => {
                    optionRefs.current[i] = el;
                  }}
                  className={`w-32 h-16 flex items-center justify-center border rounded shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 fade-in ${
                    selectedTeam === "red"
                      ? "bg-red-800 border-red-400"
                      : "bg-blue-800 border-blue-400"
                  }`}
                >
                  {opt}
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CyberpunkUI;
