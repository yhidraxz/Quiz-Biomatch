// src/components/Question.jsx
import React, { useState } from "react";
import { playClickSound } from "./SoundEffect";

export default function Question({
  question,
  subtitle, // 👈 novo campo opcional
  image,
  options = [],
  onAnswer,
}) {
  const [selected, setSelected] = useState(null);

  const handleClick = (option) => {
    setSelected(option);
    playClickSound();
    setTimeout(() => {
      onAnswer(option);
    }, 600);
  };

  const hasImage = typeof image === "string" && image.trim().length > 0;
  const isVisualOption = options.some((opt) => typeof opt === "object");

  return (
    <div className="flex flex-col items-center justify-center text-center px-4 pt-10 pb-20 min-h-screen bg-gradient-to-b from-pink-100 to-white relative">
      {/* Pergunta principal */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{question}</h2>

        {/* ✅ Subtítulo opcional */}
        {subtitle && <p className="text-gray-500 text-sm mb-4">{subtitle}</p>}

        {hasImage && (
          <img
            src={image}
            alt="pergunta"
            className="w-56 h-auto mx-auto rounded-lg shadow-md"
          />
        )}
      </div>

      {/* Opções */}
      <div
        className={`w-full max-w-md flex ${
          isVisualOption
            ? "flex-wrap justify-center gap-4"
            : "flex-col gap-3 mt-6"
        }`}
      >
        {options.map((opt, i) => {
          if (typeof opt === "string") {
            return (
              <button
                key={i}
                onClick={() => handleClick(opt)}
                disabled={!!selected}
                className={`py-3 px-4 rounded-lg font-semibold text-gray-800 shadow-md transition-all duration-300
                  ${
                    selected === opt
                      ? "bg-green-400 text-white scale-105 brightness-125"
                      : "bg-white hover:bg-green-50"
                  }
                `}
              >
                {opt}
              </button>
            );
          }

          // Se for objeto (imagem + label)
          return (
            <button
              key={i}
              onClick={() => handleClick(opt.label)}
              disabled={!!selected}
              className={`w-36 sm:w-40 rounded-xl overflow-hidden shadow-md border-2 transition-all duration-300 ${
                selected === opt.label
                  ? "border-green-500 scale-105 brightness-110"
                  : "border-gray-200 hover:border-green-300"
              }`}
            >
              <div className="flex flex-col items-center bg-white pb-3">
                <img
                  src={opt.image}
                  alt={opt.label}
                  className="w-full h-60 object-cover"
                />
                <div className="w-full bg-green-500 text-white text-center py-2 font-semibold">
                  {opt.label}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
