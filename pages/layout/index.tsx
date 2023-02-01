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
      <main className="centralizacion h-[2000px] relative bottom-40 ">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
