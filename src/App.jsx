import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home' 
import Carrinho from './pages/Carrinho.jsx'
import ProdutoDetalhes from './pages/ProdutosDetalhes.jsx'
import NotFound from './pages/NotFound.jsx'
import Cadastro from './pages/Cadastro.jsx'
import { CarrinhoProvider } from './context/CarrinhoContext.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  
  return (
    <>
    <BrowserRouter>
    <CarrinhoProvider>    {/* Garante que Home, Detalhes e Carrinho tenham acesso ao carrinho global */}

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carrinho' element={<Carrinho />} />
        <Route path='/produto/:id' element={<ProdutoDetalhes />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </CarrinhoProvider>
    </BrowserRouter>   
    </>
  ) 
}

export default App


