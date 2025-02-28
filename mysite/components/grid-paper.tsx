"use client";

import type React from "react";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";

interface GridPaperProps {
  children: React.ReactNode;
}

export default function GridPaper({ children }: GridPaperProps) {
  const [gridSpacing, setGridSpacing] = useState(20);

  return (
    <div className="relative min-h-screen w-full bg-white">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: `${gridSpacing}px ${gridSpacing}px`,
        }}
      />
      <div className="relative z-10">{children}</div>
      <div className="fixed bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg z-20">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 ">
            Grid Spacing: {gridSpacing}px
          </label>
          <Slider
            min={10}
            max={100}
            step={10}
            value={[gridSpacing]}
            onValueChange={(value) => setGridSpacing(value[0])}
          />
        </div>
      </div>
    </div>
  );
}
