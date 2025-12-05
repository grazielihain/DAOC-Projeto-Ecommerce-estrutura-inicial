// Página inicial que exibe a lista de produtos com filtro por categoria

import { useState } from "react";
import useFetch from "../hooks/useFetch.js";
import CardProdutos from "../components/CardProdutos.jsx";

export default function Home() {
  const { dados: produtos, loading, error } = useFetch('produtos'); // Busca produtos da API
  const [categoria, setCategoria] = useState('todos');// Estado para armazenar a categoria selecionada

  // Tratamento de loading e error
  if (loading) {
    return <div className="container mx-auto p-4">Carregando produtos...</div>;
  }
  if (error) {
    return <div className="container mx-auto p-4">Erro ao carregar produtos: {error}</div>;
  }
  // Filtra os produtos com base na categoria selecionada
  const produtosFiltrados = categoria === 'todos'
    ? produtos
    : produtos.filter(produto => produto.categoria === categoria);
    
  // Função para renderizar a página inicial com filtro de categoria
  return (
    <div className="container mx-auto p-4">
      <select
        className="border p-2 mb-4"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option value="todos">Todos</option>
        <option value="traje peao">Traje Peão</option>
        <option value="traje prenda">Traje Prenda</option>
        <option value="acessorios prenda">Acessórios Prenda</option>
      </select>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
        {produtosFiltrados.map(produto => (
          <CardProdutos key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  )
}