// src/App.jsx
import React, { useState } from "react";
import QuizPage from "./pages/QuizPage";
import LoadingPage from "./pages/LoadingPage";
import ConfirmationPage from "./pages/confirmationPage";

export default function App() {
  const [step, setStep] = useState("quiz");

  const handleFinish = () => setStep("loading");

  const handleLoadingComplete = () => setStep("confirmation");

  return (
    <>
      {step === "quiz" && <QuizPage onFinish={handleFinish} />}
      {step === "loading" && <LoadingPage onComplete={handleLoadingComplete} />}
      {step === "confirmation" && <ConfirmationPage />}
    </>
  );
}
