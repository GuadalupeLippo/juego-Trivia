import "./App.css";
import { Home } from "./pages/home";
import { Route, Routes, useNavigate,useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Login } from "../src/pages/login.js";
import Trivia from "./pages/trivia.js";
import PoliticasDePrivacidad from "./components/Politicas/PoliticasDePrivacidad.js";
import Store from "./pages/store.js";
import Avatars from "./pages/mis-avatars.js";
import { useAuth } from "./components/auth/UserAuth.js";


<link
  href="https://fonts.googleapis.com/css2?family=Itim&display=swap"
  rel="stylesheet"
></link>;

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

          <Route path="/login/:id" element={<  Login />} />
          <Route path="/trivia" element={<Trivia />} />
          <Route path="/politicas" element={<PoliticasDePrivacidad />} />
          <Route path="/Trivia" element={<Trivia />} />
          <Route path="/avatars" element={<Avatars />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      
    </div>
  );
}

export default App;
