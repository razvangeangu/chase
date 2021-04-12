import { createContext } from 'react';

export interface AuthContextType {
  signIn: (userId: string, password: string) => void;
  signOut: () => void;
  signUp: (userId: string, password: string) => void;
}

const AuthContext = createContext({} as AuthContextType);

export default AuthContext;
