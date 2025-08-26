import React, { useState, useEffect, useRef } from "react";
import "./terminal.css";

type TerminalLine = { type: "command" | "output" | "prompt"; text: string };

// Define a maximum number of lines to keep in the display for performance.
const MAX_LINES = 100;

const defaultScript: TerminalLine[] = [
  { type: "prompt", text: "System check initiated..." },
  { type: "output", text: "──────────────────────────────" },
  { type: "command", text: "connect --user=admin --host=192.168.1.1" },
  { type: "output", text: "🔗 Connecting to host 192.168.1.1..." },
  { type: "output", text: "✅ Authentication successful." },
  { type: "command", text: "scan --vulnerabilities" },
  { type: "output", text: "🛰️  Scanning for vulnerabilities... [35%]" },
  { type: "output", text: "🛰️  Scanning for vulnerabilities... [78%]" },
  {
    type: "output",
    text: "✅ Scan complete. 0 critical vulnerabilities found.",
  },
  { type: "command", text: "exit" },
];

const TerminalWindow = ({
  title = "System Logs",
  script = defaultScript,
}: {
  title?: string;
  script?: TerminalLine[];
}) => {
  const safeScript = script ?? defaultScript;
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const terminalBodyRef = useRef<HTMLDivElement | null>(null);

  // Typing effect
  useEffect(() => {
    if (lineIndex < safeScript.length) {
      const line = safeScript[lineIndex];
      if (charIndex < line.text.length) {
        const timeout = setTimeout(
          () => {
            setCurrentLine((prev) => prev + line.text[charIndex]);
            setCharIndex((prev) => prev + 1);
          },
          line.type === "command" ? 70 : 35
        );
        return () => clearTimeout(timeout);
      } else {
        // --- CHANGE 1: Capping the number of lines ---
        // Add the completed line and ensure the array doesn't exceed MAX_LINES.
        setLines((prev) => [...prev, line].slice(-MAX_LINES));
        setCurrentLine("");
        setCharIndex(0);
        setLineIndex((prev) => prev + 1);
      }
    } else {
      // --- CHANGE 2: Looping without clearing ---
      // When the script ends, just reset the index to start over.
      const loopTimeout = setTimeout(() => {
        setLineIndex(0);
        setCharIndex(0);
      }, 1500); // 1.5-second pause before continuing the loop

      return () => clearTimeout(loopTimeout);
    }
  }, [charIndex, lineIndex, safeScript]);

  // Auto-scroll
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [lines, currentLine]);

  return (
    <div className="w-[390px] h-[350px] bg-black/90 rounded-lg shadow-2xl font-mono text-sm border border-green-500 flex flex-col">
      {/* Title Bar */}
      <div className="bg-green-900/40 rounded-t-lg p-2 flex items-center text-green-400 font-bold tracking-wider glitch">
        {title}
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalBodyRef}
        className="p-4 overflow-y-auto flex-grow font-mono text-[13px] break-words"
      >
        {lines.map((line, index) => (
          <div key={index} className="mb-1">
            {line.type === "command" && (
              <span className="text-green-400">
                <span className="text-green-300">➜ </span>
                {line.text}
              </span>
            )}
            {line.type === "output" && (
              <span className="text-gray-200">{line.text}</span>
            )}
            {line.type === "prompt" && (
              <span className="text-cyan-400 italic">{line.text}</span>
            )}
          </div>
        ))}

        {/* Active typing line */}
        {lineIndex < safeScript.length && (
          <div className="mb-1">
            {safeScript[lineIndex].type === "command" && (
              <span className="text-green-300">➜ </span>
            )}
            <span className="text-green-400">{currentLine}</span>
            <span className="cursor">▋</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalWindow;
