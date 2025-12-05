// Página de cadastro de produtos

import { useRef, useState } from "react";
import useFetch from "../hooks/useFetch.js";
import { useNavigate } from "react-router-dom";

// Componente de cadastro de produtos
export default function Cadastro() {
  const { postDados } = useFetch('produtos'); // Usa o hook personalizado para buscar produtos
  const navigate = useNavigate();  // Hook para navegação programática
  const nomeRef = useRef();  // Referência para o campo de nome do produto

  // Estado para armazenar os dados do formulário
  const [form, setForm] = useState({ 
    nome: '',
    descricao: '',
    preco: '',
    imagem: '',
    categoria: '',
    estoque: ''
  });

  // Função para lidar com o envio do formulário
  function handleSubmit(e) {  // handleSubmit para processar o envio do formulário
    e.preventDefault(); 

    if (!form.nome) {
      nomeRef.current.focus();
      return;
    }

    const novoProduto = {      
      nome: form.nome,
      descricao: form.descricao,
      preco: Number(form.preco),
      imagem: 
      form.imagem && form.imagem.trim() !== '' ? form.imagem : "/assets/churrasco.png",   // Imagem padrão se nenhuma imagem for fornecida
      categoria: form.categoria,
      estoque: Number(form.estoque)
    };

    postDados(novoProduto);
    navigate('/');
  }

  // Renderiza o formulário de cadastro de produtos
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded p-6 mt-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Cadastro de Produto
      </h1>

      <form onSubmit={handleSubmit} className="space-y-3">

        <input
          ref={nomeRef}
          placeholder="Nome do produto"
          value={form.nome}
          onChange={e => setForm({ ...form, nome: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />

        <input
          placeholder="Descrição"
          value={form.descricao}
          onChange={e => setForm({ ...form, descricao: e.target.value })}
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          step="0.01"
          min="0"
          placeholder="Preço (ex: 199.90)"
          value={form.preco}
          onChange={e => setForm({ ...form, preco: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />

        <input
          placeholder="URL da imagem"
          value={form.imagem}
          onChange={e => setForm({ ...form, imagem: e.target.value })}
          className="w-full p-2 border rounded"
        />

        <select
          value={form.categoria}
          onChange={e => setForm({ ...form, categoria: e.target.value })}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Selecione a categoria</option>
          <option value="traje peao">Traje Peão</option>
          <option value="traje prenda">Traje Prenda</option>
          <option value="acessorios prenda">Acessórios Prenda</option>
        </select>

        <input
          type="number"
          min="0"
          placeholder="Estoque"
          value={form.estoque}
          onChange={e => setForm({ ...form, estoque: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />

        <button className="w-full bg-red-700 text-white py-2 rounded hover:bg-red-800 transition">
          Cadastrar Produto
        </button>
      </form>
    </div>
  )
}