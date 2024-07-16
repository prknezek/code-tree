import React, { createContext, useState, useRef, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const hasFetchedUser = useRef(false); // Add a ref to keep track of API call

  // When user value changes to non null, update local storage 
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  // When app loads, check if user exists in local storage
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      console.log('User found in local storage:', loggedInUser);
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  // Function to handle login success
  const handleLoginSuccess = (tokens) => {
    setUser({
      accessToken: tokens.access_token,
      refreshToken: tokens.refresh_token,
      profile: tokens.profile,
    });
    tryCreateUserInBackend();
  };

  const tryCreateUserInBackend = async () => {
    if (user && !hasFetchedUser.current) { // Check if user exists and API call hasn't been made
      hasFetchedUser.current = true; // Update ref to prevent further API calls
      try {
        await axios.post('http://localhost:4000/api/users', {
          email: user.profile.email,
          google_id: user.profile.sub,
          img: user.profile.picture,
        });
        console.log('User successfully created / retrieved');
      } catch (error) {
        console.error('Error creating user in backend:', error);
      }
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, handleLoginSuccess, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
