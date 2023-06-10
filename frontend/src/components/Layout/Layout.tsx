import { useEffect } from 'react';
import { Footer, Header, Newsletter } from '../';
import apiClient from '../../lib/api';
import { useGlobalContext } from '../../context/globalCtx';
import { ActionType } from '../../context/globalReducer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { state, dispatch } = useGlobalContext();
  useEffect(() => {
    apiClient('/user/me').then(res => {
      if (res.data) {
        dispatch({ type: ActionType.SET_PROFILE, data: res.data });
      }
    });
  }, []);
  return (
    <main>
      <Header />
      {children}
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Layout;
