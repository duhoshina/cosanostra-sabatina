import React from 'react'
import { LoginRequest, getUserLocalStorage, setUserLocalStorage } from './utils';
import { IAuthProvider, IContext, IUser } from './types';

export const AuthContext = React.createContext<IContext>({} as IContext);

export const AuthProvider = ({children}: IAuthProvider) => {

  const [user, setUser] = React.useState<IUser | null>();

  React.useEffect(() => {
    const user = getUserLocalStorage();

    if(user) {
      setUser(user);
    }
  }, []);

  async function authenticate (email: string, password: string) {
    const response = await LoginRequest(email, password);

    const payload = { email: response.email, token: response.token};

    setUser(payload);
    setUserLocalStorage(payload);
  };

  async function logout () {
    setUser(null);
    setUserLocalStorage(null);
  };

  return (
    <AuthContext.Provider value={ {...user, authenticate, logout } }>
      {children}
    </AuthContext.Provider>
  )
};