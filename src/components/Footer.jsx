// Componente de rodapé do site

// Importa o ícone do GitHub da biblioteca lucide-react
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-gray-200 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center space-y-2">

        <p className="text-sm">
          Disciplina: <span className="font-semibold">Desenvolvimento de Aplicações Orientada a Componentes</span>
        </p>

        <p className="text-sm">
          Professor: <span className="font-semibold">Juliano Ramos Matos</span>
        </p>

        <a
          href="https://github.com/grazielihain"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-yellow-300 hover:text-yellow-300 transition"
>
  <Github size={18} /> github.com/grazielihain
        </a>

        <p className="text-xs text-gray-300 pt-2">
          © {new Date().getFullYear()} — Projeto Acadêmico
        </p>
      </div>
    </footer>
  );
}