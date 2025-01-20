import { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userRole, setUserRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is logged in (e.g., by checking localStorage or session)
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
      setUserRole(localStorage.getItem('userRole') || '');
    }
  }, []);

  const login = (role) => {
    setIsAuthenticated(true);
    setUserRole(role);
    localStorage.setItem('authToken', 'temp-token');
    localStorage.setItem('userRole', role);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
  };

  return (
    <UserContext.Provider value={{ 
      userRole, 
      setUserRole,
      isAuthenticated,
      login,
      logout
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
