// src/pages/QuizPage.jsx
import React, { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import Question from "../components/Question";

export default function QuizPage({ onFinish }) {
  const [step, setStep] = useState(0);

  const questions = [
    {
      question: "Você é:",
      subtitle: "Escolhe uma opção para avançar",
      options: [
        {
          label: "Homem",
          image: "/male.webp",
        },
        {
          label: "Mulher",
          image: "/Female.webp",
        },
      ],
    },
    {
      question: "Quantos minutos por dia você consegue dedicar a si mesma?",
      subtitle: "🔒Todas as respostas são 100% confidenciais",
      options: [
        "10-15min",
        "20-30min",
        "mais de 30min",
        "Depende do dia, ainda não tenho rotina",
      ],
    },
    {
      question: "Em qual parte você gostaria de focar mais?",
      subtitle: "O método será personalizado de acordo com suas preferências",
      options: ["Barriga", "Coxas", "Braços", "Todo o corpo"],
    },
    {
      question: "Qual dessas opções mais parece com sua rotina alimentar",
      options: [
        "Tento comer bem, mas acabo exagerando às vezes",
        "Tenho uma boa alimentação, mas não vejo resultado",
        "Já fiz várias dietas, mas não consigo",
        "Não sei por onde começar",
      ],
    },
    {
      question: "Como você se sente na maior parte dos dias?",
      options: [
        "Cansada e sem disposição",
        "Energia média, mas oscilante",
        "Cheia de energia!",
        "Não sei",
      ],
    },
    {
      question:
        "Qual desses resultados você mais quer alcançar nas próximas semanas?",
      options: [
        "Sentir-se mais leve e com mais disposição",
        "Afinar a cintura",
        "Definir o corpo",
        "Todos acima",
      ],
    },
    {
      question:
        "Se eu te mostrasse um protocolo simples, prático e ajustado à sua rotina, você se comprometeria a aplicar?",
      options: ["Sim, com certeza", "Acho que sim", "Talvez", "Não sei"],
    },
  ];

  const progress = ((step + 1) / questions.length) * 100;

  const handleAnswer = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      onFinish();
    }
  };

  return (
    <div className="relative">
      <ProgressBar progress={progress} />
      <Question
        key={step}
        question={questions[step].question}
        subtitle={questions[step].subtitle}
        image={questions[step].image}
        options={questions[step].options}
        onAnswer={handleAnswer}
      />
    </div>
  );
}
