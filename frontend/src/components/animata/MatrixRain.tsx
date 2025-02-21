/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef } from "react";

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Configurations
    const fontSize = 20;
    const color = "#00FF98";
    const background = "rgba(0, 0, 0, 0.05)";
    const speed = 50;
    const charSet = "01".split("");

    const columns = Math.floor(canvas.width / fontSize);
    const rows = Math.floor(canvas.height / fontSize);
    const drops: number[] = new Array(columns).fill(0);

    ctx.font = `${fontSize}px Arial`;

    const getRandom = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const rain = () => {
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let column = 0; column < drops.length; column++) {
        ctx.fillStyle = color;
        const char = charSet[getRandom(0, charSet.length - 1)];
        ctx.fillText(char, column * fontSize, drops[column] * fontSize);

        if (Math.random() > 0.98) {
          drops[column] = 0;
        }

        drops[column]++;
      }
    };

    const interval = setInterval(rain, speed);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={
        {
          // backgroundColor: "rgb(62, 62, 86)",
        }
      }
    >
      <canvas ref={canvasRef}></canvas>

      <svg className="hide" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="blur-horizontal">
            <feGaussianBlur stdDeviation="3,0" />
          </filter>
          <filter id="blur-vertical">
            <feGaussianBlur stdDeviation="0,6" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default MatrixRain;
