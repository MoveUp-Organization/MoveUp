import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './globals.css'


import { createBrowserRouter, RouterProvider } from 'react-router'
import Cadastro from './routes/Cadastro/index.tsx'
import Contato from './routes/Contato/index.tsx'
import Conversao from './routes/Conversao/index.tsx'
import FAQ from './routes/FAQ/index.tsx'
import Home from './routes/Home/index.tsx'
import Inicio from './routes/Inicio/index.tsx'
import Integrantes from './routes/Integrantes/index.tsx'
import Login from './routes/Login/index.tsx'
import Missoes from './routes/Missoes/index.tsx'
import Sobre from './routes/Sobre/index.tsx'
import Voucher from './routes/Voucher/index.tsx'
import Error from './routes/Error/index.tsx'

const router = createBrowserRouter([
  {path : '/', element: <App />, errorElement: <Error />, children:[
    {path : '/', element: <Home/>},
    {path : '/inicio', element: <Inicio/>},
    {path : '/cadastro', element: <Cadastro/>},
    {path : '/contato', element: <Contato/>},
    {path : '/conversao', element: <Conversao/>},
    {path : '/faq', element: <FAQ/>},
    {path : '/integrantes', element: <Integrantes/>},
    {path : '/login', element: <Login/>},
    {path : '/missoes', element: <Missoes/>},
    {path : '/sobre', element: <Sobre/>},
    {path : '/voucher', element: <Voucher/>},
  ]},
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
