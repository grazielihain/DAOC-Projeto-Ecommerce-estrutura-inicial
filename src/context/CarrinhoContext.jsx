// Contexto para gerenciar o estado do carrinho de compras globalmente
import { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
    const [carrinho, setCarrinho] = useState([]); // Estado para armazenar os itens do carrinho

    // Função para adicionar um item ao carrinho
    function adicionarAoCarrinho(produto) {
        setCarrinho(prevCarrinho => {
            const itemExistente = prevCarrinho.find(item => item.id === produto.id);

            if (itemExistente) {
                if (itemExistente.quantidade < produto.estoque) {
                    return prevCarrinho.map(item =>
                        item.id === produto.id
                            ? { ...item, quantidade: item.quantidade + 1 }
                            : item
                    );
                }
                return prevCarrinho; // Não adiciona se o estoque for insuficiente
            }
            return [...prevCarrinho, { ...produto, quantidade: 1 }];
        });
    }

    // Funções para aumentar a quantidade de um item no carrinho
    function aumentarQuantidade(id) {
        setCarrinho(prevCarrinho =>
            prevCarrinho.map(item =>
                item.id === id && item.quantidade < item.estoque
                    ? { ...item, quantidade: item.quantidade + 1 }
                    : item
            ));
    }

    // Função para diminuir a quantidade de um item no carrinho
    function diminuirQuantidade(id) {
        setCarrinho(prevCarrinho => {
            const item = prevCarrinho.find(item => item.id === id);

            if (!item) return prevCarrinho;

            if (item.quantidade === 1) {
                const confirmar = window.confirm("Deseja remover este item do carrinho?");
                if (confirmar) {
                    return prevCarrinho.filter(item => item.id !== id);
                }
                return prevCarrinho;
            }
            return prevCarrinho.map(item =>
                item.id === id
                    ? { ...item, quantidade: item.quantidade - 1 }
                    : item
            );
        });
    }

    // Função para remover um item do carrinho
    function removerDoCarrinho(id) {
        setCarrinho(carrinho.filter(item => item.id !== id));
    }

    // Cálculo do total do carrinho
    const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

    return (
        // Disponibiliza o estado e as funções do carrinho para os componentes filhos
        <CarrinhoContext.Provider value={{
            carrinho,
            adicionarAoCarrinho,
            removerDoCarrinho,
            aumentarQuantidade,
            diminuirQuantidade,
            total
        }}>
            {children}
        </CarrinhoContext.Provider>
    );
}

// Hook personalizado para usar o contexto do carrinho
export function useCarrinho() {
    return useContext(CarrinhoContext);
}
