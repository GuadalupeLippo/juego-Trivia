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
function App() {
  const navigate = useNavigate();
  const { token, authUser } = useAuth();
  const location = useLocation();
  useEffect(() => {

    if (token && location.pathname === '/') {
     
      if (authUser) {
        navigate(`/login/${authUser.id}`); 
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
         <Route path="/store/:id" element={<Store />} />
          <Route path="/avatars" element={<Avatars />} />
        </Routes>
    </div>
  );
}
export default App;