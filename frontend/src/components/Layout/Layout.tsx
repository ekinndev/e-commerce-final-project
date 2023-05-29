import { Footer, Header, Newsletter } from '../';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
