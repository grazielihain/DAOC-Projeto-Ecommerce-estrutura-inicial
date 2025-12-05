// Página do carrinho de compras
import { useCarrinho } from "../context/CarrinhoContext";

// Página do carrinho de compras
export default function Carrinho() {
  const {
    carrinho,
    aumentarQuantidade,
    diminuirQuantidade,
    removerItem,
    total
  } = useCarrinho();

  if (carrinho.length === 0) {
    return (  // Mensagem exibida quando o carrinho está vazio
      <div className="text-center mt-20">
                <h2 className="text-2xl font-semibold mb-2">
                    Seu carrinho está vazio 🛒
                </h2>
                <p className="text-gray-500">
                    Adicione produtos para continuar.
                </p>
            </div>
    );
  }
  return (  // Renderiza os itens do carrinho quando não está vazio
    <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">
                Carrinho de Compras
            </h1>

            <div className="space-y-6">
                {carrinho.map(item => (
                    <div
                        key={item.id}
                        className="flex gap-4 bg-white shadow-md rounded-xl p-4 transition hover:shadow-lg"
                    >
                        <img
                            src={item.imagem}
                            alt={item.nome}
                            className="w-24 h-24 object-cover rounded-lg"
                        />

                        <div className="flex-1">
                            <h2 className="text-lg font-semibold">
                                {item.nome}
                            </h2>

                            <p className="text-sm text-gray-500">
                                Preço: R$ {item.preco.toFixed(2)}
                            </p>

                            <p className="text-sm text-gray-500">
                                Estoque disponível: {item.estoque - item.quantidade}
                            </p>

                            <div className="flex items-center gap-3 mt-3">
                                <button
                                    onClick={() => diminuirQuantidade(item.id)}
                                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 active:scale-90 transition"
                                >
                                    −
                                </button>

                                <span className="font-semibold">
                                    {item.quantidade}
                                </span>

                                <button
                                    onClick={() => aumentarQuantidade(item.id)}
                                    disabled={item.quantidade >= item.estoque}
                                    className={`w-8 h-8 rounded-full transition active:scale-90
                                        ${
                                            item.quantidade >= item.estoque
                                                ? 'bg-gray-300 cursor-not-allowed'
                                                : 'bg-green-500 text-white hover:bg-green-600'
                                        }`}
                                >
                                    +
                                </button>

                                
                            </div>

                            <p className="mt-2 font-semibold">
                                Subtotal: R$ {(item.preco * item.quantidade).toFixed(2)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-10 flex justify-between items-center border-t pt-6">
                <span className="text-2xl font-bold">
                    Total: R$ {total.toFixed(2)}
                </span>

                <button
                    className="bg-blue-950 text-white px-6 py-3 rounded-xl
                               hover:bg-blue-950 active:scale-95 transition"
                >
                    Finalizar Compra
                </button>
            </div>
        </div>
  );
}