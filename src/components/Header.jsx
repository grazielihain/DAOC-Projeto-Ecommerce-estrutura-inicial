// Componente de cabeçalho do site

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-red-700 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-xl">StoreTchê</Link>
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/carrinho">Carrinho</Link>
      </nav>
    </header>
  );
}