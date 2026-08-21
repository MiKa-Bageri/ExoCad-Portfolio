"use client";

import { useCallback, useRef, useState } from "react";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeLabel?: string;
  afterLabel?: string;
  beforeClassName: string;
  afterClassName: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeLabel = "Raw Scan",
  afterLabel = "ExoCad Design",
  beforeClassName,
  afterClassName,
  className,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    updatePosition(e.clientX);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = () => setIsDragging(false);

  return (
    <div
      ref={containerRef}
      className={cn("relative aspect-[4/3] overflow-hidden rounded-lg select-none", className)}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* After (full background) */}
      <div className={cn("absolute inset-0 bg-gradient-to-br", afterClassName)}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="space-y-2 text-center">
            <div className="mx-auto h-24 w-32 rounded-b-full rounded-t-lg bg-white/30 backdrop-blur-sm" />
            <div className="flex justify-center gap-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-10 w-5 rounded-b-md bg-white/40" />
              ))}
            </div>
          </div>
        </div>
        <span className="absolute bottom-3 right-3 rounded-md bg-black/50 px-2 py-1 text-xs text-white">
          {afterLabel}
        </span>
      </div>

      {/* Before (clipped overlay) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <div className={cn("absolute inset-0 bg-gradient-to-br", beforeClassName)}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-2 text-center opacity-80">
              <div className="mx-auto h-24 w-32 rounded-b-full rounded-t-lg border-2 border-dashed border-white/50" />
              <div className="flex justify-center gap-1">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-10 w-5 rounded-b-md border border-dashed border-white/40" />
                ))}
              </div>
            </div>
          </div>
          <span className="absolute bottom-3 left-3 rounded-md bg-black/50 px-2 py-1 text-xs text-white">
            {beforeLabel}
          </span>
        </div>
      </div>

      {/* Slider handle */}
      <div
        className="absolute inset-y-0 z-10 w-1 cursor-ew-resize bg-white shadow-lg"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        onPointerDown={handlePointerDown}
      >
        <div className="absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-primary text-primary-foreground shadow-md">
          <GripVertical className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
