"use client";

import Lottie from "lottie-react";

interface ScrollIndicatorProps {
  useLottie?: boolean;
  lottieData?: any;
  onClick?: () => void;
}

export default function ScrollIndicator({
  useLottie = false,
  lottieData,
  onClick,
}: ScrollIndicatorProps) {
  if (useLottie && lottieData) {
    return (
      <div
        onClick={onClick}
        className="flex flex-col items-center gap-2 cursor-pointer"
      >
        <Lottie
          animationData={lottieData}
          loop
          className="h-16 w-16"
        />
      </div>
    );
  }

  // CSS-based alternative that matches the requirements
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center gap-3 cursor-pointer group"
    >
      {/* Mouse outline with animated dot */}
      <div className="relative w-6 h-10 border-2 border-white rounded-full flex items-start justify-center pt-2">
        {/* Animated dot */}
        <div
          className="absolute w-1.5 h-1.5 bg-white rounded-full"
          style={{
            animation: "scrollDot 2s ease-in-out infinite",
            top: "8px",
          }}
        />
      </div>

      {/* Scroll to Explore text with fade animation */}
      <span
        className="text-white text-xs font-medium tracking-wider uppercase"
        style={{
          animation: "fadeInOut 2s ease-in-out infinite",
        }}
      >
        Scroll to Explore
      </span>
    </div>
  );
}

