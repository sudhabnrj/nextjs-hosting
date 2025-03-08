"use client";
import { createContext, useState, useEffect, useContext } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  userId: string | null;
  login: (token: string, userId: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("session");
    const storedUserId = localStorage.getItem("userId");
    console.log("Loaded Token from Storage:", token); // Debugging
    setIsAuthenticated(!!token);
    setUserId(storedUserId);

    console.log("Loaded Token from Storage:", token); // Debugging
    console.log("Loaded User ID from Storage:", storedUserId); // Debugging

    if (token) {
      setIsAuthenticated(true);
      setUserId(storedUserId ?? null);
    }
  }, []);

  const login = (token: string, userId: string) => {
    localStorage.setItem("session", token);
    localStorage.setItem("userId", userId);
    setIsAuthenticated(true);
    setUserId(userId);
  };

  const logout = () => {
    localStorage.removeItem("session");
    localStorage.removeItem("userId");
    setIsAuthenticated(false);
    setUserId(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, userId, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
