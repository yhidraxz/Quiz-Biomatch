import React from "react";

const FeatureCard = ({ title, desc }) => (
  <div className="card-soft p-4 bg-white border">
    <div className="flex items-start gap-4">
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{desc}</p>
      </div>
    </div>
  </div>
);

export default function Features() {
  return (
    <div>
      <section id="features" className="py-10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-8">
            <h4 className="text-xl text-white font-bold">
              Ative o modo queima - Transforme seu corpo naturalmente
            </h4>
            <p className="mt-2 text-gray-500">
              Centenas de mulheres estão emagrecendo sem sofrimento ou dietas
              restritivas
            </p>
          </div>

          <div className="grid gap-4 grid-cols-1 ml:grid-cols-3">
            <FeatureCard
              title="Aprenda a ativar o modo queima, e emagreça gordura até enquanto descansa"
              desc=""
            />
            <FeatureCard
              title="Reprograme o corpo pra usar gordura como fonte de energia"
              desc=""
            />
            <FeatureCard
              title="Ative o modo quiema, e fique magra pra sempre"
              desc=""
            />
          </div>
        </div>
      </section>
      <section id="features" className="py-10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-8">
            <h4 className="text-xl text-white font-bold">Volte a ser jovem</h4>
          </div>

          <div className="grid gap-4 grid-cols-1 ml:grid-cols-3">
            <FeatureCard
              title="Elimine gordura localizada na barriga, cintura e braços com técnicas simples "
              desc=""
            />
            <FeatureCard
              title="Diferente de exercícios intensos e dietas restritivas — você vai ter ainda mais disposição e dormir melhor"
              desc=""
            />
            <FeatureCard
              title="Conquiste um corpo de dar inveja, e receba elogios (até do marido) nas primeiras semanas"
              desc=""
            />
          </div>
        </div>
      </section>
      <section id="features" className="py-10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-8">
            <h4 className="text-xl text-white font-bold">
              Simples, natural e comprovado
            </h4>
          </div>

          <div className="grid gap-4 grid-cols-1 ml:grid-cols-3">
            <FeatureCard
              title="Faça tudo em casa — Pra quem não tem tempo pra academia e treinos longos"
              desc=""
            />
            <FeatureCard
              title="100% natural e seguro, baseado na ciência e mais de 20 anos de experiência, aplicado por +200 mulheres"
              desc=""
            />
            <FeatureCard
              title="Ebook com etapas práticas pra ativar o modo queima de gordura"
              desc=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
