import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuComponent from "./component/menu";
import PageNaoEncontrada from "./pages/404";
import CriarFrasePage from "./pages/criar";
import EditarFrasePage from "./pages/editar";
import InicioPage from "./pages/inicio";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <MenuComponent/>
        <Routes>
          <Route path='/' element={<InicioPage/>}/>
          <Route path='/criar' element={<CriarFrasePage/>}/>
          <Route path='/editar/:id' element={<EditarFrasePage/>}/>
          <Route path="*" element={<PageNaoEncontrada/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}