import React from "react";

export default function Garantia() {
  return (
    <section id="sobre" className="py-10">
      <div className="container-mobile mx-auto max-w-5xl grid gap-8 ml:grid-cols-2 items-center">
        <div>
          <h3 className="text-center text-2xl text-white font-bold mb-3">
            Não diga sim, diga talvez..
          </h3>
          <img className="mb-4 " src="../../garantia.png"></img>
          <h4 className="text-xl text-gray-300 font-medium text-center">
            Se você aplicar o método e não se sentir satisfeita, damos todo seu
            dinheiro de volta
          </h4>
          <div className="flex justify-center mt-8 sm:flex-row sm:items-center gap-3">
            <a
              href="#cta"
              className="justify-center align-center btn text-white bg-green-500 btn-xl"
            >
              Adquirir o método
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
