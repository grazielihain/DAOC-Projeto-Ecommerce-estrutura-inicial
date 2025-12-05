// Hook personalizado para buscar dados da API para GET/POST, centralizando tratamento de loading e erros

import { useEffect, useState } from "react";
import API_URL from "../services/api";

// Hook personalizado useFetch para buscar dados de um endpoint
export default function useFetch(endpoint) {  
  const [dados, setData] = useState([]);  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

// Função para buscar dados do endpoint
  async function buscarDados() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/${endpoint}`);
      const json = await response.json();

      setData(json);
    } catch (error) {
        setError("Falha ao buscar dados.");
    } finally {
        setLoading(false);
    }               
  }

  // useEffect para chamar buscarDados quando o componente for montado ou o endpoint mudar
  async function postDados(novoDado) {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novoDado),
    });
    return response.json();
  }

  // Chama buscarDados quando o componente for montado ou o endpoint mudar
    useEffect(() => {
        buscarDados();
    }, [endpoint]);

  return { dados, loading, error, buscarDados, postDados };
}