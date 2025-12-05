// Página exibida quando a rota não é encontrada (404)

import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold mb-4">404</h1>
      <p className="text-lg mb-6">Ops — página não encontrada.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800"
      >
        Voltar para a Home
      </Link>
    </div>
  )
}