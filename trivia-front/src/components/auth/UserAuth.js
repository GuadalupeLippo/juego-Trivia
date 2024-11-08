import React, { createContext, useContext, useState, useEffect} from 'react';
import { APITRIVIA } from '../../API/getDataBase';



// Crear el contexto
const AuthContext = createContext();


// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [token, setToken] = useState(null);
  const [sessionExpired, setSessionExpired] = useState(false);

   
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
    setAuthUser(playerData); 
  };

  // Función para manejar el inicio de sesión
  const login = async (player, token) => {
    try {
      setAuthUser(player);
      localStorage.setItem('authATRV', JSON.stringify({ token })); 
      await fetchPlayerData(token);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  // Función para manejar el cierre de sesión
  const logout = () => {
    setToken(null);
    localStorage.removeItem('authATRV');
    setSessionExpired(false);
  };

  // Actualiza el avatar del jugador
  const updateAvatar = (newAvatar) => {
    setAuthUser((prevUser) => ({
      ...prevUser,
      defaultAvatar: newAvatar,
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
  const savedData = localStorage.getItem('authATRV');

  if (savedData) {
    try {
      const { token } = JSON.parse(savedData);
      setToken(token);
      fetchPlayerData(token).catch((error) => {
       
        if (error.message === 'Error al obtener los datos del jugador') {
          console.error("Token expirado o no válido:", error.message);
          alert('Tu sesión ha caducado, vuelve a iniciarla');
          setSessionExpired(true); 

          
          setTimeout(() => {
            logout(); 
          }, 2000); 
        } else {
          console.error("Error al cargar datos del jugador:", error.message);
        }
      });
    } catch (error) {
      console.error("Error al parsear el token:", error);
      logout();
    }
  } else {
    console.log("No hay token guardado en localStorage");
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
        fetchPlayerData
      }}
    >
      {children}
      {sessionExpired &&
       <div className="alert">
        Tu sesión ha caducado, vuelve a iniciarla
        </div>}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto en otros componentes
export const useAuth = () => {
  return useContext(AuthContext);
};
