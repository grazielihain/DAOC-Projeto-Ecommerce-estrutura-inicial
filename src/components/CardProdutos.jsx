// Componente para exibir informações básicas do produto em um card

import { Link } from "react-router-dom";

// Recebe o objeto 'produto' como prop
export default function CardProdutos({ produto }) {
    return (
       <div className="border rounded p-4 shadow">
      <img src={produto.imagem || "/assets/churrasco.png"} alt={produto.nome} className="h-40 w-full object-cover" />
      <h2 className="font-bold">{produto.nome}</h2>
      <p>R$ {Number(produto.preco).toFixed(2)}</p>

      {produto.estoque === 0 && ( // Exibe "Esgotado" se o estoque for 0
        <span className="text-red-600">Esgotado</span>
      )}

      <Link
        to={`/produto/${produto.id}`} // Link para a página de detalhes do produto
        className="block mt-2 bg-red-700 text-white text-center px-4 py-2 rounded"
      >
        Ver Detalhes
      </Link>
    </div>
    );
} 