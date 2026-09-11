import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './globals.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cadastro from './pages/Cadastro/index.tsx'
import Contato from './pages/Contato/index.tsx'
import Conversao from './pages/Conversao/index.tsx'
import FAQ from './pages/FAQ/index.tsx'
import Home from './pages/Home/index.tsx'
import Inicio from './pages/Inicio/index.tsx'
import Integrantes from './pages/Integrantes/index.tsx'
import Login from './pages/Login/index.tsx'
import Missoes from './pages/Missoes/index.tsx'
import Sobre from './pages/Sobre/index.tsx'
import Voucher from './pages/Voucher/index.tsx'
import Error from './pages/Error/index.tsx'
import MissaoDetalhe from './pages/MissaoDetalhe/index.tsx'
import TransferirPontos from './pages/TransferirPontos/index.tsx'
import Historico from './pages/Historico/index.tsx'
import MeuCartao from './pages/Cartao/index.tsx'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Cadastro />,
  },
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Inicio /> },
      { path: '/home', element: <Home /> },
      { path: '/contato', element: <Contato /> },
      { path: '/conversao', element: <Conversao /> },
      { path: '/faq', element: <FAQ /> },
      { path: '/integrantes', element: <Integrantes /> },
      { path: '/missoes', element: <Missoes /> },
      { path: '/missoes/:id', element: <MissaoDetalhe /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/voucher', element: <Voucher /> },
      { path: '/transferir-pontos', element: <TransferirPontos /> },
      { path: '/historico', element: <Historico /> },
      { path: '/meu-cartao', element: <MeuCartao /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)