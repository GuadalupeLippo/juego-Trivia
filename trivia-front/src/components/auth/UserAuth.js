import React, { createContext, useContext, useState, useEffect } from 'react';
import { APITRIVIA } from '../../API/getDataBase';


// Crear el contexto
const AuthContext = createContext();

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [token, setToken] = useState(null);

   
  // Función para obtener los datos del jugador autenticado
  const fetchPlayerData = async (accessToken) => {
   
    const response = await fetch(`${APITRIVIA}/player/profile`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    if (!response.ok) {
      throw new Error('Error al obtener los datos del jugador');
    }

    const playerData = await response.json();
    setAuthUser(playerData); // Guardar los datos del jugador en el estado global
  };

  // Función para manejar el inicio de sesión
  const login = async (player, token) => {
    try {
      setAuthUser(player); 
      localStorage.setItem('token', token); 
      
      
      await fetchPlayerData(token);

    } catch (error) {
      console.error("Error al iniciar sesión:", error); 
      
    }
  };
  
  // Función para manejar el cierre de sesión
  const logout = () => {
    setToken(null); 
    localStorage.removeItem('token'); 
  };

  // Actualiza el avatar del jugador
  const updateAvatar = (newAvatar) => {
    setAuthUser((prevUser) => ({
      ...prevUser,
      avatar: newAvatar,
    }));
  };

  // Actualiza los puntos del jugador
  const updateScore = (newScore) => {
    setAuthUser((prevUser) => ({
      ...prevUser,
      score: newScore,
    }));
  };

 // Efecto para cargar los datos del jugador desde localStorage al iniciar la aplicación
 useEffect(() => {
 
  const savedToken = localStorage.getItem('token');

  if (savedToken) {
    setToken(savedToken);
    // Hacer fetch para obtener los datos completos del jugador usando el token
    fetchPlayerData(savedToken).catch((error) => {
      console.error("Error al cargar datos del jugador:", error.message);
    });
  }
}, []);
  

  return (
    <AuthContext.Provider
      value={{
        authUser,
        setAuthUser,
        token,
        login,
        logout,
        updateAvatar,
        updateScore,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto en otros componentes
export const useAuth = () => {
  return useContext(AuthContext);
};
