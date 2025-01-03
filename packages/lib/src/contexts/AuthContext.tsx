// packages/lib/src/contexts/authContext.tsx
// Manages basic authentication status and user data within a React context.

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface UserData {
  id: string;
  name: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserData | null;
  login: (user: UserData) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // If user is set, user is considered authenticated
  const [user, setUser] = useState<UserData | null>(null);

  const login = (newUser: UserData) => setUser(newUser);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
