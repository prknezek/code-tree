import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (tokens) => {
    setUser({
      accessToken: tokens.access_token,
      refreshToken: tokens.refresh_token,
      profile: tokens.profile,
    });
    localStorage.setItem('accessToken', tokens.access_token);
    localStorage.setItem('refreshToken', tokens.refresh_token);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };

  return (
    <UserContext.Provider value={{ user, handleLoginSuccess, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
