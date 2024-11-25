import './App.module.css'
import FormCliente from '../Cliente/FormCliente.jsx'
import LandingPage from '../LandingPage/LandingPage.jsx'
import Jogadores from '../Jogadores/jogadores.jsx'
import NossaHistoria from '../NossaHistoria/NossaHistoria.jsx'
import FormFornecedor from '../Fornecedor/FormFornecedor.jsx'
import Produtos from '../Produtos/Produtos.jsx';

function App() {

  return (
    <>
      <LandingPage />
      <FormCliente />
      <FormFornecedor />
      <Jogadores />
      <Produtos />
      <NossaHistoria />
    </>
  )
}

export default App