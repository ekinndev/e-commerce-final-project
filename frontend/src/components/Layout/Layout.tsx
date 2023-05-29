import { Footer, Header, Navbar, Newsletter } from '../';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main>
      <Header />
      <Navbar />
      {children}
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Layout;