import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t">
      <div className="container-mobile mx-auto max-w-5xl py-8">
        <div className="flex flex-col ml:flex-row items-center justify-between gap-4">
          <div className="text-sm ">
            &copy; {new Date().getFullYear()} Método BioMatch. Todos os direitos
            reservados.
          </div>
          <div className="flex items-center gap-4">
            <a className="text-sm  hover:text-brand-600" href="#">
              Termos
            </a>
            <a className="text-sm  hover:text-brand-600" href="#">
              Política de Privacidade
            </a>
            <a className="text-sm  hover:text-brand-600" href="#">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
