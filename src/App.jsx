import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "./Cadastro/Cadastro";
import Login from "./Login/Login"
import Inicio from "./Inicio/Inicio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inicio" element={<Inicio />} />

      </Routes>
    </Router>
  );
}
export default App;
