import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import WatsonAssistant from "./components/WatsonAssistant/WatsonAssistant";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Cabecalho />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Rodape />
      <WatsonAssistant />
    </div>
  )
}