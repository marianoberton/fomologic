import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Share2, Zap } from 'lucide-react';

const VisualAutomation: React.FC = () => {
  // Path definition: A (Left) -> B (Top Right) -> C (Bottom Right) -> A (Left)
  // Node Centers: A(60, 150), B(320, 80), C(320, 220)
  const pathD = "M 60 150 C 160 150, 220 80, 320 80 L 320 220 C 220 220, 160 150, 60 150";

  return (
    <div className="w-full h-full min-h-[200px] relative flex items-center justify-center overflow-hidden bg-[#1A1A1A] rounded-[2rem] border border-white/5">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        
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
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="2"
                strokeDasharray="4 4"
            />
            
            {/* Traveling Packet (The Pulse) */}
            {/* Using animateMotion for perfect path following */}
            <circle r="3" fill="#CED600" filter="url(#glow-lime)">
                <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    path={pathD}
                    keyPoints="0;1"
                    keyTimes="0;1"
                    calcMode="linear"
                />
            </circle>

             {/* Second Packet (Delayed) */}
             <circle r="3" fill="#CED600" filter="url(#glow-lime)" opacity="0.5">
                <animateMotion
                    dur="3s"
                    begin="1.5s"
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
                <rect width="40" height="40" rx="12" stroke="#333" fill="#272727" strokeWidth="1" />
                <Database size={18} className="text-neutral-500" x="11" y="11" />
            </g>

            {/* Node B: Top Right (Process) */}
            <g transform="translate(300, 60)">
                <rect width="40" height="40" rx="12" stroke="#CED600" strokeOpacity="0.5" fill="#272727" strokeWidth="1" />
                <Zap size={18} className="text-[#CED600]" x="11" y="11" />
                {/* Glow effect for active node */}
                <circle cx="20" cy="20" r="25" stroke="#CED600" strokeOpacity="0.2" fill="none">
                    <animate attributeName="r" values="25;35;25" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
                </circle>
            </g>

            {/* Node C: Bottom Right (Output) */}
            <g transform="translate(300, 200)">
                <rect width="40" height="40" rx="12" stroke="#333" fill="#272727" strokeWidth="1" />
                <Share2 size={18} className="text-neutral-500" x="11" y="11" />
            </g>

        </svg>

        <div className="absolute bottom-6 left-0 w-full text-center">
             <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">Flujo Autónomo</span>
        </div>
    </div>
  );
};

export default VisualAutomation;