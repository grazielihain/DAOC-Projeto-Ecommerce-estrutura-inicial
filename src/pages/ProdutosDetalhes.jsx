// Página de detalhes do produto com opção de adicionar ao carrinho
import { useParams } from "react-router-dom"
import { useCarrinho } from "../context/CarrinhoContext";
import { useState, useEffect } from "react";
import API_URL from "../services/api.js";


// Página de detalhes do produto com opção de adicionar ao carrinho
export default function ProdutosDetalhes() {
  const { id } = useParams();
  const { carrinho, adicionarAoCarrinho } = useCarrinho();

  const [produto, setProduto] = useState(null);
  const [error, setError] = useState(null);

  // useEffect para buscar os detalhes do produto quando o componente for montado
  useEffect(() => {
    fetch(`${API_URL}/produtos?id=${id}`)
      .then(response => {
        if (!response.ok)
          throw new Error("Erro ao buscar detalhes do produto"); 
        return response.json();
      })
      .then(data => {
        if (data.length === 0) {
          setError("Produto não encontrado.");
        } else {
          setProduto(data[0]);
        }
      })
      .catch(() => {
        setError("Erro ao carregar detalhes do produto.");
      });
  }, [id]);

  // Tratamento de loading e error
  if (error) {
    return (
      <div className="container mx-auto p-4">
        Erro ao carregar detalhes do produto: {error}
      </div>
    );
  }
  if (!produto) {
    return (
      <div className="container mx-auto p-4"> Carregando detalhes do produto...</div>
    );
  }

  // Verifica a quantidade do produto no carrinho para calcular o estoque disponível
  const itenNoCarrinho = carrinho.find(item => item.id === produto.id);
  const quantidadeNoCarrinho = itenNoCarrinho ? itenNoCarrinho.quantidade : 0;

  const estoqueDisponivel = produto.estoque - quantidadeNoCarrinho;
  const semEstoque = estoqueDisponivel <= 0;

  function handleAdicionar() {
    if (!semEstoque) {
      adicionarAoCarrinho(produto);
    }
  }

  return (
    <div key={produto.id} className="max-w-4xl mx-auto p-6">
      <img
        src={produto.imagem}
        alt={produto.nome}
        className="w-full max-w-md mx-auto rounded-lg"
      />

      <h1 className="text-2xl font-bold mt-4">{produto.nome}</h1>
      <p className="my-2">{produto.descricao}</p>
      <p className="font-semibold">R$ {produto.preco.toFixed(2)}</p>

      <p className="mt-2">
        Estoque disponível: {''}
        <span className={semEstoque ? "text-red-600 font-bold" : "font-bold"}>
          {Math.max(0, estoqueDisponivel)}
        </span>
      </p>

      <button
        type="button"
        onClick={handleAdicionar}
        disabled={semEstoque}
        className={`
          mt-4 px-6 py-2 rounded text-white transition-all duration-300
          ${semEstoque
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-green-600 hover:bg-green-700 active:scale-95'}
        `}
      >
        {semEstoque ? 'Sem estoque' : 'Adicionar'}
      </button>
    </div>
  )
}