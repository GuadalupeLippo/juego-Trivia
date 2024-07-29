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
  const updateScore = (newScore) => {
    setAuthUser((prevUser) => ({
      ...prevUser,
      score: newScore
    }));
  };

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser,updateAvatar,updateScore }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
