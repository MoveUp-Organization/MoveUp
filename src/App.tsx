import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Início</div>} />
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/cadastro" element={<div>Cadastro</div>} />
        <Route path="/home" element={<div>Home</div>} />
        <Route path="/missoes" element={<div>Missões</div>} />
        <Route path="/conversao" element={<div>Conversão</div>} />
        <Route path="/voucher" element={<div>Voucher</div>} />
        <Route path="/sobre" element={<div>Sobre</div>} />
        <Route path="/faq" element={<div>FAQ</div>} />
        <Route path="/contato" element={<div>Contato</div>} />
        <Route path="/integrantes" element={<div>Integrantes</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App