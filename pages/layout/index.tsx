import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="centralizacion">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
