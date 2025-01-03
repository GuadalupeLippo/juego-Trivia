import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "./components/auth/UserAuth";
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import reseñas from '../src/reviews.json';


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
  <AuthProvider>
    <App />
  </AuthProvider>
  </BrowserRouter>
)

const cargarReseñas = () => {
  if (!localStorage.getItem('reseñas')) {
     localStorage.setItem('reseñas', JSON.stringify(reseñas));
  }
}




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
cargarReseñas();
