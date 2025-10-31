// src/components/ProgressBar.jsx
import React from "react";

export default function ProgressBar({ progress }) {
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden fixed top-0 left-0 z-50">
      <div
        className="h-full bg-green-500 transition-all duration-500"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
