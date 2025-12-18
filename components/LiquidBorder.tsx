import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface LiquidBorderProps {
    className?: string;
    borderRadius?: number;
    borderWidth?: number;
}

const LiquidBorder: React.FC<LiquidBorderProps> = ({ 
    className = "",
    borderRadius = 24, // 3xl
    borderWidth = 1
}) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const size = useRef({ w: 0, h: 0 });
    
    // Physics state for 4 sides: Top, Right, Bottom, Left
    // Each has a "bend" value (offset from neutral) and a "bendPos" (where the bend peaks, 0-1)
    const sides = useRef([
        { bend: 0, targetBend: 0, bendPos: 0.5, targetBendPos: 0.5 }, // Top
        { bend: 0, targetBend: 0, bendPos: 0.5, targetBendPos: 0.5 }, // Right
        { bend: 0, targetBend: 0, bendPos: 0.5, targetBendPos: 0.5 }, // Bottom
        { bend: 0, targetBend: 0, bendPos: 0.5, targetBendPos: 0.5 }, // Left
    ]);

    useEffect(() => {
        const svg = svgRef.current;
        const path = pathRef.current;
        if (!svg || !path) return;

        // Resize Observer
        const observer = new ResizeObserver((entries) => {
            const entry = entries[0];
            if (entry) {
                size.current = {
                    w: entry.contentRect.width,
                    h: entry.contentRect.height
                };
            }
        });
        observer.observe(svg);

        // Mouse Interaction
        const onMouseMove = (e: MouseEvent) => {
            const rect = svg.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Influence radius
            const range = 100;
            const maxBend = 15; // Max pixels to bend

            // Calculate distance to each side and influence
            const w = size.current.w;
            const h = size.current.h;

            // Top Edge
            const distTop = Math.abs(y);
            if (x > 0 && x < w && distTop < range) {
                sides.current[0].targetBend = (1 - distTop / range) * maxBend;
                sides.current[0].targetBendPos = x / w;
            } else {
                sides.current[0].targetBend = 0;
            }

            // Right Edge
            const distRight = Math.abs(x - w);
            if (y > 0 && y < h && distRight < range) {
                sides.current[1].targetBend = (1 - distRight / range) * maxBend;
                sides.current[1].targetBendPos = y / h;
            } else {
                sides.current[1].targetBend = 0;
            }

            // Bottom Edge
            const distBottom = Math.abs(y - h);
            if (x > 0 && x < w && distBottom < range) {
                sides.current[2].targetBend = (1 - distBottom / range) * maxBend;
                sides.current[2].targetBendPos = x / w;
            } else {
                sides.current[2].targetBend = 0;
            }

            // Left Edge
            const distLeft = Math.abs(x);
            if (y > 0 && y < h && distLeft < range) {
                sides.current[3].targetBend = (1 - distLeft / range) * maxBend;
                sides.current[3].targetBendPos = y / h;
            } else {
                sides.current[3].targetBend = 0;
            }
        };

        const onMouseLeave = () => {
            sides.current.forEach(side => {
                side.targetBend = 0;
                side.targetBendPos = 0.5;
            });
        };

        // Attach listeners to parent (the card)
        const parent = svg.parentElement;
        if (parent) {
            parent.addEventListener('mousemove', onMouseMove);
            parent.addEventListener('mouseleave', onMouseLeave);
        }

        // Animation Loop
        const ticker = () => {
            const w = size.current.w;
            const h = size.current.h;
            const r = borderRadius;
            const pad = borderWidth / 2; // Padding to prevent clipping
            
            if (w === 0 || h === 0) return;

            // Lerp physics
            sides.current.forEach(side => {
                side.bend += (side.targetBend - side.bend) * 0.1;
                side.bendPos += (side.targetBendPos - side.bendPos) * 0.1;
            });

            const s = sides.current;
            
            // Construct Path
            // We use Quadratic Bezier curves for sides to simulate bending
            
            // Start Top-Left after corner
            let d = `M ${r} ${pad}`;

            // Top Side (Curve)
            // Control Point Y: pad + bend
            d += ` Q ${w * s[0].bendPos} ${pad + s[0].bend} ${w - r} ${pad}`;

            // Top-Right Corner
            d += ` A ${r} ${r} 0 0 1 ${w - pad} ${r}`;

            // Right Side
            // Control Point X: w - pad - bend
            d += ` Q ${w - pad - s[1].bend} ${h * s[1].bendPos} ${w - pad} ${h - r}`;

            // Bottom-Right Corner
            d += ` A ${r} ${r} 0 0 1 ${w - r} ${h - pad}`;

            // Bottom Side
            // Control Point Y: h - pad - bend
            d += ` Q ${w * s[2].bendPos} ${h - pad - s[2].bend} ${r} ${h - pad}`;

            // Bottom-Left Corner
            d += ` A ${r} ${r} 0 0 1 ${pad} ${h - r}`;

            // Left Side
            // Control Point X: pad + bend
            d += ` Q ${pad + s[3].bend} ${h * s[3].bendPos} ${pad} ${r}`;

            // Top-Left Corner
            d += ` A ${r} ${r} 0 0 1 ${r} ${pad}`;

            d += " Z";

            path.setAttribute("d", d);
        };

        gsap.ticker.add(ticker);

        return () => {
            observer.disconnect();
            if (parent) {
                parent.removeEventListener('mousemove', onMouseMove);
                parent.removeEventListener('mouseleave', onMouseLeave);
            }
            gsap.ticker.remove(ticker);
        };
    }, [borderRadius]);

    return (
        <svg 
            ref={svgRef}
            className={`absolute inset-0 w-full h-full pointer-events-none overflow-visible ${className}`}
        >
            <path 
                ref={pathRef}
                fill="none"
                strokeWidth={borderWidth}
                stroke="currentColor"
                vectorEffect="non-scaling-stroke"
            />
        </svg>
    );
};

export default LiquidBorder;
