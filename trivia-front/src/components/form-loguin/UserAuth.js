import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  const updateAvatar = (newAvatar) => {
    setAuthUser((prevUser) => ({
      ...prevUser,
      avatar: newAvatar
    }));
  };

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser,updateAvatar }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
