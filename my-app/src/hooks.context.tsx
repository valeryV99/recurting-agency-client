import React, { ReactNode } from 'react'
import { CustomerListStore } from './pages/customerList/store'

export interface StoreContextState {
  customerListStore: CustomerListStore
}

const StoreContext = React.createContext<StoreContextState>({} as StoreContextState);

interface StoreContextProviderProps {
  children?: ReactNode;
  store: StoreContextState;
}

export const StoreProvider = ({ children, store }: StoreContextProviderProps) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext);