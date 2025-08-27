import { createContext, useState, useEffect, type ReactNode } from "react";
//PLACEHOLDER FOR FUTURE IMPLEMENTAION IF NEED USER SYSTEM
type AuthContextType = {
  user: any;
  login: (data: any) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);

  // ✅ token check / auto-login
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // optionally verify token with backend here
      setUser({ token });
    }
  }, []);

  const login = (data: any) => {
    localStorage.setItem("token", data.token);
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
