// src/pages/ConfirmationPage.jsx
import React from "react";
import { playClickSound } from "../components/SoundEffect";

export default function ConfirmationPage() {
  const handleRedirect = () => {
    playClickSound();
    window.location.href = "https://bio-match-five.vercel.app";
  };

  return (
    <div className="flex flex-col items-center justify-center text-center px-6 min-h-screen bg-gradient-to-b from-pink-100 to-white">
      <h1 className="text-2xl font-bold text-gray-800 mb-3">
        Suas respostas foram enviadas com sucesso! ✅
      </h1>
      <p className="text-gray-600 max-w-sm mb-6">
        Agora você vai descobrir por que <strong>tantas mulheres</strong> se
        sentem travadas, mesmo se esforçando — e o que fazer pra{" "}
        <strong>jogar junto com o seu corpo</strong>, e não contra ele.
        <br />
        <br />O vídeo a seguir explica tudo passo a passo.
      </p>

      <button
        onClick={handleRedirect}
        className="py-3 px-6 bg-green-500 hover:bg-green-600 text-white rounded-lg text-lg font-semibold shadow-md transition-all duration-300"
      >
        Assistir ao vídeo agora →
      </button>
    </div>
  );
}
