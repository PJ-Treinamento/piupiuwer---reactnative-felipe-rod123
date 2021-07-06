import { createContext, useContext, useState } from "react";
import { UserProps } from "../components/User";
import api from "../services/api";

import AsyncStorage  from '@react-native-community/async-storage';
//yarn add @react-native-community/async-storage

interface LoginCredentials{
  email: string,
  password: string,
}

interface AuthContextData{
  user: UserProps,
  token: string,
  login(loginCred: LoginCredentials): void
  logout(logoutCred: boolean): void
}

interface AuthState{
  user: UserProps,
  token: string
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {

	const [userData, setUserData] = useState<AuthState>(() => {
        const token = AsyncStorage.getItem('@Project:token');
        const user = AsyncStorage.getItem('@Project:user');

        if (user && token) {
            return { token, user: JSON.parse(user) };
        }

        return {} as AuthState;
  });

	const login = async ({ email, password }: LoginCredentials) => {
      const response = await api.post('/sessions/login', {
          email,
          password,
      })

      const { token, user } = response.data;
      setUserData({token, user});

      AsyncStorage.setItem('@Project:token', token);
      AsyncStorage.setItem('@Project:user', JSON.stringify(user));

      setUserData({ token, user });
  };

  const logout = () => {
    AsyncStorage.removeItem('@Project:user');
    AsyncStorage.removeItem('@Project:token');
 
   setUserData({} as AuthState);
 }

  return(
    <AuthContext.Provider value={{
      login,
      logout,
      user: userData.user,
      token: userData.token
    }}>
      {children}
    </AuthContext.Provider>
  )

}

export const useAuth = ():AuthContextData =>{
  const useAuthContext = useContext(AuthContext)
  return useAuthContext
}