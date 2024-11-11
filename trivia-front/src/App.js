import "./App.css";
import { Home } from "./pages/home";
import { Route, Routes, useNavigate,useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Login } from "../src/pages/login.js";
import Trivia from "./pages/trivia";
import PoliticasDePrivacidad from "./components/Politicas/PoliticasDePrivacidad.js";
import Store from "./pages/store.js";
import Avatars from "./pages/mis-avatars.js";
import { useAuth } from "./components/auth/UserAuth.js";
import Reseñas from "./components/reseñas/Reseñas";

function App() {
  const navigate = useNavigate();
  const { token, authUser } = useAuth();
  const location = useLocation(); 


  useEffect(() => {
    // Verificar si hay un token y si el usuario no está en la página de perfil
    if (token && location.pathname === '/') {
      // Redirigir al perfil usando el id de authUser
      if (authUser) {
        navigate(`/login/${authUser.id}`); // Usa el id de authUser
      }
    }
  }, [token, location.pathname, authUser, navigate]);


return (
  <div className="traslucido">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login/:id" element={<Login />} />
      <Route path="/trivia" element={<Trivia />} />
      <Route path="/politicas" element={<PoliticasDePrivacidad />} />
      <Route path="/store" element={<Store />} />
      <Route path="/avatars" element={<Avatars />} />
      
      {/* Ruta para las reseñas solo si el usuario está logueado */}
      {token && <Route path="/reseñas" element={<Reseñas />} />}
    </Routes>
  </div>
);

export default App;

