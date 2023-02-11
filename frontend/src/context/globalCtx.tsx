import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { initalState, IReducer, IState, reducer } from './globalReducer';

const GlobalContext = createContext({
  state: initalState,
  dispatch: (action: IReducer) => {},
});

const MyStore = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer<React.Reducer<IState, IReducer>>(reducer, initalState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export default MyStore;
