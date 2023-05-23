import { Footer, Header, Navbar, Newsletter } from '../';

export default function Layout({ children }) {
  return (
    <main>
      <Header />
      <Navbar />
      {children}
      <Newsletter />
      <Footer />
    </main>
  );
}
