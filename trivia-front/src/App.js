import "./App.css";
import { Home } from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "../src/pages/login.js";
import Trivia from "./pages/trivia.js";
import PoliticasDePrivacidad from "./components/Politicas/PoliticasDePrivacidad.js";
import Store from "./pages/store.js";
import Avatars from "./pages/mis-avatars.js";


<link
  href="https://fonts.googleapis.com/css2?family=Itim&display=swap"
  rel="stylesheet"
></link>;
<link  rel="stylesheet"></link>;

function App() {
  return (
    <div className="traslucido">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login/:id" element={<  Login />} />
          <Route path="/trivia" element={<Trivia />} />
          <Route path="/politicas" element={<PoliticasDePrivacidad />} />
         
          <Route path="/avatars" element={<Avatars />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
