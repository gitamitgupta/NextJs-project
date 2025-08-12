"use client";
import React, { useEffect, useRef, useState } from "react";

// Simple cn utility function
const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

// Simple noise function as fallback
const createSimpleNoise = () => {
  return (x: number, y: number, z: number) => {
    return Math.sin(x * 0.01 + z * 10) * Math.cos(y * 0.01 + z * 10) * 0.5;
  };
};

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const noise = createSimpleNoise();

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.5;
      case "fast":
        return 1.0;
      default:
        return 0.5;
    }
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8", 
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    let time = 0;
    let isAnimating = true;

    const drawWave = (waveIndex: number, time: number) => {
      const amplitude = 100;
      const frequency = 0.003;
      const phase = waveIndex * 0.5;
      
      ctx.beginPath();
      ctx.strokeStyle = waveColors[waveIndex % waveColors.length];
      ctx.lineWidth = waveWidth || 50;
      ctx.lineCap = "round";
      ctx.globalAlpha = waveOpacity;
      
      let firstPoint = true;
      for (let x = 0; x <= dimensions.width; x += 3) {
        const y = dimensions.height / 2 + 
          Math.sin(x * frequency + time * getSpeed() * 0.01 + phase) * amplitude +
          Math.sin(x * frequency * 2 + time * getSpeed() * 0.015 + phase) * amplitude * 0.5;
        
        if (firstPoint) {
          ctx.moveTo(x, y);
          firstPoint = false;
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      ctx.stroke();
    };

    const render = () => {
      if (!isAnimating) return;
      
      // Clear canvas
      ctx.globalAlpha = 1;
      ctx.fillStyle = backgroundFill || "#000000";
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);
      
      // Draw waves
      for (let i = 0; i < 5; i++) {
        drawWave(i, time);
      }
      
      time += 1;
      animationIdRef.current = requestAnimationFrame(render);
    };

    // Apply blur filter
    if (blur > 0) {
      ctx.filter = `blur(${blur}px)`;
    }

    render();

    return () => {
      isAnimating = false;
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [dimensions, blur, speed, waveOpacity, waveWidth, backgroundFill, waveColors]);

  return (
    <div
      className={cn(
        "relative w-full h-screen overflow-hidden flex flex-col items-center justify-center",
        containerClassName
      )}
      style={{ minHeight: '100vh' }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ 
          width: '100%', 
          height: '100%',
          display: 'block'
        }}
      />
      <div className={cn("relative z-10 text-center", className)} {...props}>
        {children}
      </div>
    </div>
  );
};

// Demo component
const Demo = () => {
  return (
    <WavyBackground
      colors={["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"]}
      waveWidth={60}
      waveOpacity={0.6}
      speed="fast"
      blur={8}
      backgroundFill="#0a0a0a"
    >
      <div className="text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Wavy Background
        </h1>
        <p className="text-xl md:text-2xl opacity-80 mb-8">
          Beautiful animated waves flowing in the background
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors">
            Get Started
          </button>
          <button className="px-8 py-3 border border-white/30 hover:border-white/50 rounded-lg font-semibold transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </WavyBackground>
  );
};

export default Demo;