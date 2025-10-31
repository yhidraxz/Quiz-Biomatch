// src/pages/LoadingPage.jsx
import React, { useEffect } from "react";

export default function LoadingPage({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 4000); // 4 segundos de "processando..."
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500 mb-6"></div>
      <h2 className="text-lg font-semibold text-gray-700">
        Carregando suas respostas...
      </h2>
      <p className="text-gray-500 mt-2">Aguarde alguns segundos</p>
    </div>
  );
}
