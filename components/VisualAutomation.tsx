import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Share2 } from 'lucide-react';

const VisualAutomation: React.FC = () => {
  // Path definition: A (Left) -> B (Top Right) -> C (Bottom Right) -> A (Left)
  // Node Centers: A(60, 150), B(320, 80), C(320, 220)
  const pathD = "M 60 150 C 160 150, 220 80, 320 80 L 320 220 C 220 220, 160 150, 60 150";

  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-transparent">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        
        <svg viewBox="0 0 400 300" className="w-full h-full p-4 relative z-10">
            <defs>
                <filter id="glow-lime" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            
            {/* The Path (Track) */}
            <path
                d={pathD}
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
                strokeDasharray="6 6"
            />
            
            {/* Traveling Packet (The Pulse) */}
            {/* Using animateMotion for perfect path following */}
            <circle r="4" fill="#a3e635" filter="url(#glow-lime)">
                <animateMotion
                    dur="4s"
                    repeatCount="indefinite"
                    path={pathD}
                    keyPoints="0;1"
                    keyTimes="0;1"
                    calcMode="linear"
                />
            </circle>
            
            {/* Nodes */}
            {/* Node A: Left (Input) */}
            <g transform="translate(40, 130)">
                <rect width="40" height="40" rx="8" stroke="rgba(255,255,255,0.2)" fill="#18181b" strokeWidth="2" />
                <Database size={20} className="text-white/50" x="10" y="10" />
            </g>

            {/* Node B: Top Right (Process) */}
            <g transform="translate(300, 60)">
                <rect width="40" height="40" rx="8" stroke="rgba(255,255,255,0.2)" fill="#18181b" strokeWidth="2" />
                <Server size={20} className="text-white/50" x="10" y="10" />
            </g>

            {/* Node C: Bottom Right (Output) */}
            <g transform="translate(300, 200)">
                <rect width="40" height="40" rx="8" stroke="rgba(255,255,255,0.2)" fill="#18181b" strokeWidth="2" />
                <Share2 size={20} className="text-white/50" x="10" y="10" />
            </g>

        </svg>
    </div>
  );
};

export default VisualAutomation;
